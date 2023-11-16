import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  inputs: ViewStyle;
  twoInputs: ViewStyle;
  dateInputStyle: ViewStyle;
  dateInputContainer: ViewStyle;
  buttonContainer: ViewStyle;
  restaurantInfo: ViewStyle;
  infoTitle: TextStyle;
  infoDescription: TextStyle;
  phoneNumber: ViewStyle;
  underlineText: TextStyle;
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
      marginBottom: 20,
    },
    inputStyle: {
      height: 40,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    inputs: {
      marginBottom: 10,
    },
    twoInputs: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
    dateInputStyle: {
      width: 130,
      height: 40,
    },
    dateInputContainer: {
      width: 130,
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 50,
    },
    restaurantInfo: {
      marginTop: 20,
    },
    infoTitle: {
      fontSize: 18,
      fontFamily: 'PoppinsBold',
      color: Colors.light.defaultYellow,
      marginBottom: 10,
    },
    infoDescription: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      color: Colors.light.black,
    },
    phoneNumber: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    underlineText: {
      textDecorationLine: 'underline',
    },
  });
};
