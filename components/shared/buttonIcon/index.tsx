import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';

const ButtonWithIcon = ({
  title,
  onPress,
  containerStyles,
  icon,
  textStyle,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyles} activeOpacity={0.8}>
      {icon}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
