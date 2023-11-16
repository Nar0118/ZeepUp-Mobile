import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  label: TextStyle;
  pinkText: TextStyle;
  inputContainer: ViewStyle;
  inputStyle: ViewStyle;
  price: TextStyle;
  percentContainer: ViewStyle;
  radioItem: ViewStyle;
  radioButtonContainer: ViewStyle;
  optionText: TextStyle;
  infoText: TextStyle;
  line: TextStyle;
  switchRow: ViewStyle;
  bottomContainer: ViewStyle;
  smallInputStyle: ViewStyle;
  smallInputContainer: ViewStyle;
  smallInputs: ViewStyle;
  buttonContainer: ViewStyle;
  labelWithMargin: TextStyle;
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
      columnGap: 10,
      marginBottom: 20,
    },
    label: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 14,
      color: Colors.light.black,
      marginBottom: 5,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
    inputContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    inputStyle: {
      height: 40,
    },
    price: {
      textAlign: 'center',
      fontFamily: 'PoppinsSemiBold',
      fontSize: 23,
      color: Colors.light.defaultPink,
    },
    percentContainer: {
      marginVertical: 10,
    },
    radioItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    radioButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 50,
    },
    optionText: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
    },
    infoText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
    },
    line: {
      marginVertical: 20,
      borderBottomWidth: 2,
      width: '80%',
      borderBottomColor: Colors.light.inputBorderColor,
    },
    switchRow: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 5,
      columnGap: 5,
    },
    bottomContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      columnGap: 20,
    },
    smallInputStyle: {
      height: 40,
    },
    smallInputContainer: {
      width: 175,
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    smallInputs: {
      marginTop: 5,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    labelWithMargin: {
      marginTop: 10,
    },
  });
};
