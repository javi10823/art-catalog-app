import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-paper';
import {Container} from './styles';

interface Props {
  onBack: () => void;
  isFavorite: boolean;
  onFavorite: () => void;
  disabled?: boolean;
}

const Header = ({onBack, isFavorite, disabled, onFavorite}: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={onBack}>
        <Icon source="arrow-left" size={24} />
      </TouchableOpacity>
      <TouchableOpacity disabled={disabled} onPress={onFavorite}>
        {isFavorite ? (
          <Icon source="star-circle" color="#D0B83E" size={24} />
        ) : (
          <Icon source="star-circle-outline" color="gray" size={24} />
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
