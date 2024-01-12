import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const TagContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 8px;
`;

export const Tag = styled.View<{favorite?: boolean}>`
  border-radius: 16px;
  height: 24px;
  padding: 0 16px;
  background-color: ${({favorite}) => (favorite ? '#D0B83E' : '#707070')};
`;

export const TextTag = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #50c878;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 16,
    marginTop: 8,
    paddingBottom: 40,
  },
  title: {fontWeight: '500', fontSize: 20},
  location: {fontSize: 14},
  description: {
    fontSize: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingHorizontal: 4,
    backgroundColor: '#e4e4e4',
    marginTop: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  buttonText: {fontWeight: '500', color: 'white', fontSize: 16},
});
