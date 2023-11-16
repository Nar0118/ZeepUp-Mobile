import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  title: TextStyle;
  inputIcon: ViewStyle;
  description: TextStyle;
  inputLabel: TextStyle;
  accountName: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  emailText: TextStyle;
  bottomInputStyle: ViewStyle;
  bottomInputContainer: ViewStyle;
  bottomInputPhoneContainer: ViewStyle;
  inputs: ViewStyle;
  buttonContainer: ViewStyle;
  passwordInputs: ViewStyle;
  errorMessage: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      padding: 20,
    },
    headerPart: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    title: {
      fontSize: 24,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    description: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      color: Colors.light.black,
      marginTop: 10,
    },
    accountName: {
      marginVertical: 20,
    },
    inputLabel: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      color: Colors.light.black,
      marginBottom: 10,
    },
    inputIcon: {
      height: 65,
      backgroundColor: Colors.light.defaultYellow,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 15,
    },
    inputStyle: {
      minWidth: '70%',
      height: 40,
      fontFamily: 'PoppinsMedium',
    },
    inputContainer: {
      minWidth: '80%',
    },
    emailText: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      color: Colors.light.black,
      marginLeft: 10,
    },
    bottomInputStyle: {
      height: 40,
    },
    bottomInputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    bottomInputPhoneContainer: {
      flexDirection: 'row-reverse',
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
      borderRadius: 30,
      paddingLeft: 10,
    },
    inputs: {
      marginTop: 10,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 40,
    },
    passwordInputs: {
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
