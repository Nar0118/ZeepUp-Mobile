import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  orderNumber: TextStyle;
  pinkText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    description: {
      fontSize: 18,
      fontFamily: 'PoppinsSemiBold',
      color: Colors.light.black,
      marginTop: 20,
    },
    orderNumber: {
      fontSize: 14,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
      marginTop: 30,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
  });
};
