import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 1,
      position: 'relative',
    },
    text: {
      marginLeft: 10,
      color: Colors.light.placeholderGrey,
    },
  });
};
