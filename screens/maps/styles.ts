import { StyleSheet, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
  });
};
