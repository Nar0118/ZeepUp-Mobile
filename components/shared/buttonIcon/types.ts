import { TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyles: ViewStyle;
  textStyle?: TextStyle;
  icon?: JSX.Element;
}
