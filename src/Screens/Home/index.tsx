import axios from 'axios';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator, Icon} from 'react-native-paper';
import {
  SearchBar,
  SelectedButton,
  EventCard,
  SearchEventCard,
} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container, HeaderWrapper} from './styles';
import {ArtEvent} from '../../types/event';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import {API_URL} from '@env';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const [events, setEvents] = useState<ArtEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<ArtEvent[]>();
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (searchQuery) {
      const timeout = setTimeout(() => {
        axios
          .get(
            `${API_URL}events/search?q="${searchQuery}"&limit=60&sort=timestamp`,
          )
          .then(res => {
            setEvents(res.data.data);
            setLoading(false);
          });
      }, 1000);

      return () => clearTimeout(timeout);
    }
    axios.get(`${API_URL}events?limit=30`).then(res => {
      setEvents(res.data.data);
      setLoading(false);
    });
  }, [searchQuery]);

  const renderEvents = useCallback(
    ({item}: {item: ArtEvent}) => {
      const onPressEvent = () =>
        navigation.navigate('Details', {link: item.api_link});

      if (searchQuery) {
        return <SearchEventCard event={item} onPress={onPressEvent} />;
      }
      return <EventCard event={item} onPress={onPressEvent} />;
    },
    [navigation, searchQuery],
  );

  useEffect(() => {
    if (showFavorites) {
      const getFavorites = async () => {
        setLoading(true);
        const list = await AsyncStorage.getItem('favorites');
        setFavorites(JSON.parse(list || '') || []);
        setLoading(false);
      };
      getFavorites();
    }
  }, [showFavorites]);

  const listData = useMemo(() => {
    if (showFavorites) {
      return favorites;
    }

    return events;
  }, [showFavorites, events, favorites]);

  return (
    <Container>
      <HeaderWrapper>
        <SearchBar onChange={setSearchQuery} value={searchQuery} />
        <SelectedButton
          selected={showFavorites}
          disabled={loading}
          onPress={() => setShowFavorites(prev => !prev)}>
          <Icon
            source="calendar-star"
            color={showFavorites ? 'white' : 'black'}
            size={30}
          />
        </SelectedButton>
      </HeaderWrapper>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={listData}
          renderItem={renderEvents}
          keyExtractor={({id}) => `${id}`}
        />
      )}
    </Container>
  );
};

export default Home;
