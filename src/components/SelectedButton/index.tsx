import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Button} from './styles';

interface Props {
  children: JSX.Element;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const SelectedButton = ({children, selected, onPress, disabled}: Props) => (
  <Button selected={selected} disabled={disabled} onPress={onPress}>
    {children}
  </Button>
);

export default SelectedButton;
