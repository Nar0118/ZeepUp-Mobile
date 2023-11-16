import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { PlatformOS } from '../../utils/platform';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  inputs: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  dropdownContainer: ViewStyle;
  dropdown: ViewStyle;
  label: TextStyle;
  buttonContainer: ViewStyle;
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
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      overflow: 'hidden',
      height: '100%',
      paddingHorizontal: 20,
      paddingVertical: 50,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      marginBottom: 20,
      textAlign: 'center',
    },

    inputs: {
      marginBottom: 10,
    },
    inputStyle: {
      height: 40,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    dropdownContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      columnGap: Platform.OS == PlatformOS.IOS ? 30 : 60,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      width: 130,
    },
    label: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
      marginBottom: 5,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
      marginBottom: 100,
    },
  });
};
