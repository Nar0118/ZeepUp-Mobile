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
  otherVersionLogin: ViewStyle;
  loginWithContainer: ViewStyle;
  loginText: TextStyle;
  textUnderscore: TextStyle;
  socialContainer: ViewStyle;
  buttonContainer: ViewStyle;
  errorMessage: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.defaultPink,
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
      color: Colors.light.defaultYellow,
      marginBottom: 5,
    },
  });
};
