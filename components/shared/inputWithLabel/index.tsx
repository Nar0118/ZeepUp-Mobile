import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { getStyles } from './styles';
import { InputProps } from './types';

const Input = ({
  icon,
  placeholder,
  style,
  placeholderTextColor,
  containerStyles,
  isPassword,
  isNumeric,
  label,
  value,
  defaultValue,
  onChangeText,
  onIconPress,
  ...props
}: InputProps) => {
  const styles = getStyles();

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[containerStyles, styles.container]}>
        <TextInput
          keyboardType={isNumeric ? 'numeric' : 'default'}
          secureTextEntry={isPassword}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          {...props}
          style={[style, styles.input]}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onIconPress} activeOpacity={1}>
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
