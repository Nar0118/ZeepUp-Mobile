import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  optionContainer: ViewStyle;
  radioCircle: ViewStyle;
  selectedOption: ViewStyle;
  radioCircleActive: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    radioCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Colors.light.inputBorderColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    selectedOption: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: Colors.light.defaultPink,
    },
    radioCircleActive: {
      borderColor: Colors.light.defaultPink,
    },
  });
};
