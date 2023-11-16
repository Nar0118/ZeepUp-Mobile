import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  infoContainer: ViewStyle;
  inputMainContainer: ViewStyle;
  otherVersionLogin: ViewStyle;
  loginWithContainer: ViewStyle;
  loginText: TextStyle;
  textUnderscore: TextStyle;
  socialContainer: ViewStyle;
  buttonContainer: ViewStyle;
  overlay: ViewStyle;
  errorMessage: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: 60,
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
      paddingTop: 40,
      paddingHorizontal: 40,
    },
    otherVersionLogin: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    loginWithContainer: {
      marginVertical: 20,
      width: '100%',
    },
    loginText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      textAlign: 'center',
      color: Colors.light.white,
      marginBottom: 20,
    },
    textUnderscore: {
      textDecorationLine: 'underline',
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 20,
    },
    errorMessage: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.red,
      marginBottom: 5,
    },
  });
};
