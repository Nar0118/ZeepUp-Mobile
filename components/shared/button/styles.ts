import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  button: ViewStyle;
  buttonText: TextStyle;
  border: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    button: {
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'PoppinsMedium',
      fontWeight: '400',
      fontSize: 20,
    },
    border: {
      borderWidth: 1,
      borderColor: Colors.light.black,
    },
  });
};
