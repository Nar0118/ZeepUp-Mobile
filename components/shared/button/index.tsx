import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';

import { getStyles } from './styles';

const Button = ({
  title,
  onPress,
  width,
  height,
  backgroundColor,
  textColor,
  fontSize = 20,
  disabled,
  border,
}: ButtonProps): JSX.Element => {
  const styles = getStyles();

  const buttonStyles = {
    backgroundColor,
    width,
    height,
    border,
  };

  const textStyles = {
    color: textColor,
    fontSize: fontSize,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyles, border && styles.border]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
