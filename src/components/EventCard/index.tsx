import React from 'react';
import {ThumbnailImage} from '../';
import {ArtEvent} from '../../types/event';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';
import {LocationTag, styles} from './styles';

interface Props {
  event: ArtEvent;
  onPress: () => void;
}

const EventCard = ({event, onPress}: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.touchableStyle}>
    <View style={styles.imageContainer}>
      <ThumbnailImage source={{uri: event.image_url}} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{event.title}</Text>
      {event.short_description && (
        <HTML
          contentWidth={Dimensions.get('window').width}
          source={{html: event.short_description}}
        />
      )}
      <View style={styles.locationContainer}>
        <Text>Location: </Text>
        <LocationTag>
          <Text>{event.location}</Text>
        </LocationTag>
      </View>
    </View>
  </TouchableOpacity>
);

export default EventCard;
