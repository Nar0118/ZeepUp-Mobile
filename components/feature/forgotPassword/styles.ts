import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  description: ViewStyle;
  buttonContainer: ViewStyle;
  errorMessage: TextStyle;
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
      overflow: 'hidden',
      height: '100%',
      paddingHorizontal: 30,
      paddingVertical: 30,
    },
    inputStyle: {
      height: 50,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.placeholderGrey,
      borderWidth: 1,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      marginBottom: 20,
      maxWidth: 200,
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 13,
      color: Colors.light.black,
      marginBottom: 30,
    },
    errorMessage: {
      fontFamily: 'PoppinsLight',
      fontSize: 13,
      color: Colors.light.red,
      marginBottom: 10,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: 200,
    },
  });
};
