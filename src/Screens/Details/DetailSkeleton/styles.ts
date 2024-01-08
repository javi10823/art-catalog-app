import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
`;

export const ContentContainer = styled.View`
  margin: 0 16px;
  margin-top: 8px;
`;

export const styles = StyleSheet.create({
  textContainer: {marginTop: 4},
  title: {height: 24, width: '90%'},
  location: {height: 20, width: '30%', marginTop: 8},
  date: {height: 20, width: '20%', marginTop: 8},
  list: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  itemMd: {
    borderRadius: 16,
    width: '15%',
    height: 24,
  },
  itemLg: {
    borderRadius: 16,
    width: '20%',
    height: 24,
  },
  itemSm: {
    borderRadius: 16,
    width: '10%',
    height: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    width: '30%',
    height: 36,
    borderRadius: 8,
  },
});
