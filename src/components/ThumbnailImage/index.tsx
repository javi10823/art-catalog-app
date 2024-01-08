import React from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Container, styles} from './styles';

const ThumbnailImage = ({source}: {source: Source}) => {
  if (!source.uri) {
    return <Container style={styles.blank} />;
  }

  return (
    <Container>
      <FastImage
        source={source}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Container>
  );
};

export default ThumbnailImage;
