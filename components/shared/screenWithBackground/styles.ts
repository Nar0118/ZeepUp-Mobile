import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  backgroundImage: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    backgroundImage: {
      flex: 1,
    },
  });
};
