import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  buttonContainer: ViewStyle;
  orderNumber: TextStyle;
  underlineText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    infoContainer: {
      backgroundColor: Colors.light.white,
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      overflow: 'hidden',
      height: '100%',
      paddingHorizontal: 20,
      paddingVertical: 50,
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      marginVertical: 20,
      maxWidth: 200,
      textAlign: 'center',
    },
    orderNumber: {
      fontFamily: 'PoppinsLight',
      fontSize: 14,
      color: Colors.light.black,
    },
    underlineText: {
      textDecorationLine: 'underline',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
  });
};
