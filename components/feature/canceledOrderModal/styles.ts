import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  closeContainer: ViewStyle;
  infoContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  orderNumber: TextStyle;
  description: TextStyle;
  pinkText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.white,
      paddingVertical: 20,
      width: '100%',
    },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    image: {
      marginTop: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      marginTop: 10,
    },
    orderNumber: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 16,
      color: Colors.light.black,
      marginTop: 20,
    },
    description: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
      marginTop: 30,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
  });
};
