import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ArtEvent} from '../../types/event';
import {styles} from './styles';
import React from 'react';

interface Props {
  event: ArtEvent;
  onPress: () => void;
}

const SearchEventCard = ({event, onPress}: Props) => (
  <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{event.title}</Text>
    </View>
  </TouchableOpacity>
);

export default SearchEventCard;
