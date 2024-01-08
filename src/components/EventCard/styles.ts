import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const LocationTag = styled.View`
  background-color: pink;
  padding: 4px 8px;
  flex-shrink: 1;
  border-radius: 16px;
`;

export const styles = StyleSheet.create({
  touchableStyle: {
    marginBottom: 8,
    flex: 1,
    rowGap: 4,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
  },
  imageContainer: {height: 200},
  detailsContainer: {flexShrink: 1, rowGap: 8},
  title: {fontWeight: '500', fontSize: 16},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
