import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  infoContainer: ViewStyle;
  inputMainContainer: ViewStyle;
  title: TextStyle;
  loginText: TextStyle;
  overlay: ViewStyle;
  bottomTitle: TextStyle;
  yellowText: TextStyle;
  button: ViewStyle;
  text: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: 60,
    },
    title: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      marginBottom: 30,
    },
    inputStyle: {
      height: 50,
    },
    inputMainContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 20,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      width: '100%',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 100,
      paddingHorizontal: 40,
    },
    loginText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      textAlign: 'center',
      color: Colors.light.white,
      marginBottom: 20,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    yellowText: {
      color: Colors.light.defaultYellow,
    },
    bottomTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 35,
      textAlign: 'center',
      color: Colors.light.white,
      marginTop: 50,
    },
    button: {
      backgroundColor: Colors.light.white,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 20,
      height: 55,
      borderRadius: 10,
      paddingHorizontal: 10,
      minWidth: '100%',
    },
    text: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.placeholderGrey,
    },
  });
};
