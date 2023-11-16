import { ViewStyle } from 'react-native';

export interface InputProps {
  icon?: JSX.Element;
  placeholder?: string;
  style?: ViewStyle;
  containerStyles?: Array<ViewStyle> | ViewStyle;
  isPassword?: boolean;
  isNumeric?: boolean;
  isPhone?: boolean;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onIconPress?: () => void;
}
