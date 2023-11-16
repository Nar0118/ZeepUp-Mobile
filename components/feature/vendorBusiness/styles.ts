import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputMainContainer: ViewStyle;
  inputs: ViewStyle;
  bigInputStyle: ViewStyle;
  smallInputContainer: ViewStyle;
  twoItemsContainer: ViewStyle;
  dropdown: ViewStyle;
  label: TextStyle;
  placeholder: TextStyle;
  imageInput: ViewStyle;
  checkboxContainer: ViewStyle;
  checkboxText: TextStyle;
  blueText: TextStyle;
  buttonContainer: ViewStyle;
  saveButton: ViewStyle;
  submitButton: ViewStyle;
  countryInput: ViewStyle;
  buttonText: TextStyle;
  countryTitle: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: Colors.light.white,
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.black,
    },
    inputMainContainer: {
      marginVertical: 20,
      marginBottom: 50,
    },
    inputContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    inputStyle: {
      height: 50,
    },
    bigInputStyle: {
      height: 70,
    },
    smallInputContainer: {
      width: 140,
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    inputs: {
      marginBottom: 15,
    },
    twoItemsContainer: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 10,
      marginBottom: 10,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    label: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
      marginBottom: 10,
    },
    imageInput: {
      height: 50,
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
      columnGap: 10,
    },
    placeholder: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.inputBorderColor,
    },
    checkboxContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 10,
    },
    checkboxText: {
      fontFamily: 'PoppinsLight',
      fontSize: 13,
      color: Colors.light.black,
    },
    blueText: {
      color: Colors.light.lightBlue,
      textDecorationLine: 'underline',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 20,
      marginVertical: 30,
    },
    saveButton: {
      width: 150,
      height: 40,
      backgroundColor: Colors.light.defaultYellow,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 30,
    },
    submitButton: {
      width: 150,
      height: 40,
      backgroundColor: Colors.light.defaultPink,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 30,
    },
    buttonText: {
      fontFamily: 'PoppinsLight',
      fontSize: 13,
      color: Colors.light.white,
    },
    countryInput: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 15,
      marginTop: 15,
      marginLeft: 10,
    },
    countryTitle: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
    },
  });
};
