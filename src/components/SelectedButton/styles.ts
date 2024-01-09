import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{selected: boolean}>`
  background-color: ${({selected}) => (selected ? '#D0B83E' : 'transparent')};
  border-radius: 4px;
`;
