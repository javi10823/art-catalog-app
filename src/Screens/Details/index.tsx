import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, Linking, ScrollView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import HTML from 'react-native-render-html';
import {ThumbnailImage} from '../../components';
import {Icon} from 'react-native-paper';
import DetailSkeleton from './DetailSkeleton';
import Header from './Header';
import {Button, Tag, TagContainer, styles} from './styles';
import {RootStackParamList} from '../../types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ArtEvent} from '../../types/event';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route, navigation}: Props) => {
  const [event, setEvent] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (route.params) {
      const {link} = route.params;

      setLoading(true);
      axios.get(link).then(res => {
        setEvent(res.data.data);
        setLoading(false);
      });
    }
  }, [route.params]);

  const onFavorite = async () => {
    const favorites: ArtEvent[] = await AsyncStorage.getItem('favorites').then(
      fav => (fav ? JSON.parse(fav) : []),
    );
    if (isFavorite) {
      const filteredFavs = favorites.filter(({id}) => id !== event.id);
      await AsyncStorage.setItem('favorites', JSON.stringify(filteredFavs));
    } else {
      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, event]),
      );
    }
    setIsFavorite(prev => !prev);
  };

  useEffect(() => {
    const checkFav = async () => {
      const favorites: ArtEvent[] = await AsyncStorage.getItem(
        'favorites',
      ).then(fav => (fav ? JSON.parse(fav) : []));

      if (favorites.find(({id}) => id === event.id)) {
        setIsFavorite(true);
      }
    };

    if (event) {
      checkFav();
    }
  }, [event]);

  const onBuy = useCallback(async () => {
    await Linking.openURL(event.rsvp_link);
  }, [event?.rsvp_link]);

  if (loading || !event) {
    return <DetailSkeleton onBack={() => navigation.goBack()} />;
  }

  return (
    <>
      <Header
        onFavorite={onFavorite}
        isFavorite={isFavorite}
        onBack={() => navigation.goBack()}
        disabled={loading}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').width / 1.6,
          }}>
          <ThumbnailImage source={{uri: event?.image_url}} />
        </View>
        <View>
          <Text style={styles.title}>{event?.title}</Text>
        </View>

        <View>
          <Text style={styles.location}>Location: {event?.location}</Text>
        </View>
        {event?.date_display && (
          <View>
            <Text>{event?.date_display}</Text>
          </View>
        )}
        <TagContainer>
          {event?.is_free && <Tag favorite>Free</Tag>}
          {event?.is_registration_required && <Tag>Registration Required</Tag>}
          {event?.is_member_exclusive && <Tag>Exclusive</Tag>}

          <Tag>{event?.is_private ? 'Private' : 'Public'}</Tag>

          {event?.is_virtual && <Tag>Virtual</Tag>}
        </TagContainer>
        <View style={styles.buttonsContainer}>
          <Button onPress={() => {}}>
            <Text style={styles.buttonText}>Add to Calendar</Text>
            <Icon source="calendar-import" size={20} color="white" />
          </Button>
          {event?.buy_button_text && (
            <Button onPress={onBuy}>
              <Text style={styles.buttonText}>{event.buy_button_text}</Text>
              <Icon source="arrow-right" size={20} color="white" />
            </Button>
          )}
        </View>

        <View>
          <HTML
            source={{html: event?.description}}
            baseStyle={styles.description}
            contentWidth={Dimensions.get('window').width}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
