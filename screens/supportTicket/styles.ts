import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  radioItem: ViewStyle;
  optionText: TextStyle;
  preTitle: TextStyle;
  requiredIcon: TextStyle;
  infoItem: ViewStyle;
  dropdown: ViewStyle;
  bigInputStyle: ViewStyle;
  inputContainer: ViewStyle;
  imageInput: ViewStyle;
  placeholder: TextStyle;
  buttonContainer: ViewStyle;
  indicatorContainer: ViewStyle;
  errorMessage: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      padding: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 20,
      marginBottom: 50,
    },
    radioItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    optionText: {
      fontFamily: 'PoppinsLight',
      fontSize: 14,
      color: Colors.light.black,
    },
    preTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 14,
      color: Colors.light.black,
      marginBottom: 20,
    },
    requiredIcon: {
      color: Colors.light.red,
      fontSize: 16,
    },
    infoItem: {
      marginBottom: 20,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      width: '100%',
    },
    bigInputStyle: {
      height: 100,
    },
    inputContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    imageInput: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      columnGap: 10,
    },
    placeholder: {
      fontFamily: 'PoppinsLight',
      fontSize: 14,
      color: Colors.light.black,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 50,
    },
    indicatorContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    errorMessage: {
      fontFamily: 'PoppinsLight',
      fontSize: 13,
      color: Colors.light.red,
      marginBottom: 10,
    },
  });
};
