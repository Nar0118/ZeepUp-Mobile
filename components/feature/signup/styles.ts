import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  inputMainContainer: ViewStyle;
  buttonContainer: ViewStyle;
  checkboxContainer: ViewStyle;
  phoneContainer: ViewStyle;
  checkboxText: TextStyle;
  yellowText: TextStyle;
  image: ImageStyle;
  errorMessage: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.defaultPink,
      flex: 1,
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 60,
      columnGap: 20,
    },
    phoneContainer: {
      flexDirection: 'row',
    },
    title: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 44,
      color: Colors.light.white,
    },
    description: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      marginVertical: 20,
    },
    inputMainContainer: {
      display: 'flex',
      alignItems: 'center',
      rowGap: 20,
      paddingHorizontal: 30,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      width: '100%',
    },
    inputStyle: {
      height: 50,
    },
    image: {
      width: 125,
      height: 125,
    },
    buttonContainer: {
      marginBottom: 50,
    },
    checkboxContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 30,
    },
    checkboxText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 13,
      color: Colors.light.white,
    },
    yellowText: {
      color: Colors.light.defaultYellow,
    },
    errorMessage: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.defaultYellow,
      marginBottom: 5,
    },
  });
};
