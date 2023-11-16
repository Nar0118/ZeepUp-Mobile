import { ViewStyle } from 'react-native';

export interface InputProps {
  icon?: JSX.Element;
  placeholder?: string;
  label?: string;
  style?: ViewStyle;
  containerStyles?: ViewStyle;
  isPassword?: boolean;
  isNumeric?: boolean;
  placeholderTextColor?: string;
  value?: string | number;
  defaultValue?: string | number;
  onIconPress?: () => void;
  onChangeText?: (text: string) => void;
}
