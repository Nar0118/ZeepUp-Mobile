import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { getStyles } from './styles';
import { InputProps } from './types';
import MaskInput from 'react-native-mask-input';

const PhoneNumberInput = ({
  icon,
  onIconPress,
  placeholder,
  style,
  placeholderTextColor,
  containerStyles,
  isPassword,
  isNumeric,
  value,
  isPhone,
  onChangeText,
  ...props
}: InputProps) => {
  const styles = getStyles();

  return (
    <View style={[containerStyles, styles.container]}>
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer} activeOpacity={1}>
        {icon}
      </TouchableOpacity>
      <MaskInput
        value={value}
        placeholder={placeholder}
        style={[style, styles.input]}
        keyboardType='numeric'
        {...props}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        mask={['+', '1', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
    </View>
  );
};

export default PhoneNumberInput;
