import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ContentContainer, HeaderContainer, styles} from './styles';

interface Props {
  onBack: () => void;
}
const DetailSkeleton = ({onBack}: Props) => (
  <>
    <HeaderContainer>
      <TouchableOpacity onPress={onBack}>
        <Icon source="arrow-left" size={24} />
      </TouchableOpacity>
    </HeaderContainer>
    <ContentContainer>
      <SkeletonPlaceholder backgroundColor="#cacaca" borderRadius={8}>
        <View>
          <View
            style={{
              width: Dimensions.get('screen').width - 32,
              height: Dimensions.get('screen').width / 1.6,
            }}
          />
          <View style={styles.textContainer}>
            <View style={styles.title} />
            <View style={styles.location} />
            <View style={styles.date} />

            <View style={styles.list}>
              <View style={styles.itemMd} />
              <View style={styles.itemLg} />
              <View style={styles.itemSm} />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button} />
              <View style={styles.button} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </ContentContainer>
  </>
);

export default DetailSkeleton;
