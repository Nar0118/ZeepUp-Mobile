import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { getStyles } from './styles';
import { InputProps } from './types';

const IconInput = ({
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
  defaultValue,
  onChangeText,
  disabled,
  ...props
}: InputProps) => {
  const styles = getStyles();

  return (
    <View style={[containerStyles, styles.container]}>
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer} activeOpacity={1}>
        {icon}
      </TouchableOpacity>
      <TextInput
        defaultValue={defaultValue}
        keyboardType={isPhone ? 'phone-pad' : isNumeric ? 'numeric' : 'default'}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        {...props}
        style={[style, styles.input]}
        onChangeText={onChangeText}
        editable={!disabled}
      />
    </View>
  );
};

export default IconInput;
