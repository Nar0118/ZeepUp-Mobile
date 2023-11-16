import { ViewStyle } from 'react-native';

export interface InputProps {
  icon?: JSX.Element;
  placeholder?: string;
  style?: ViewStyle;
  containerStyles?: ViewStyle;
  isPassword?: boolean;
  isNumeric?: boolean;
  isPhone?: boolean;
  placeholderTextColor?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  onIconPress?: () => void;
  disabled?: boolean;
}
