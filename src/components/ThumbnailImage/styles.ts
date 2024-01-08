import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
`;

export const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  blank: {
    backgroundColor: 'gray',
  },
});
