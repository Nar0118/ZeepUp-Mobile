import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';
import { PlatformOS } from '../../../utils/platform';

type Styles = {
  inputStyle: ViewStyle;
  inputContainer: ImageStyle;
  inputs: ViewStyle;
  buttonContainerBottom: ViewStyle;
  dropdownContainer: ViewStyle;
  dropdown: ViewStyle;
  label: TextStyle;
  errorMessage: TextStyle;
  inputStyleCvv: TextStyle;
  inputContainerCvv: TextStyle;
};

const screenWidth = Dimensions.get('window').width;

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    inputStyle: {
      height: 40,
    },
    inputStyleCvv: {
      width: screenWidth * 0.25,
      height: 49,
    },
    inputContainerCvv: {
      width: screenWidth * 0.25,
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    inputs: {
      marginBottom: 10,
    },
    buttonContainerBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
    },
    dropdownContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      columnGap: 10,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      width: screenWidth * 0.25,
    },
    label: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
      marginBottom: 5,
    },
    errorMessage: {
      fontFamily: 'PoppinsLight',
      fontSize: 13,
      color: Colors.light.red,
      marginBottom: 10,
    },
  });
};
