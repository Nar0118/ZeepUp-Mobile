import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  imageContainer: ViewStyle;
  title: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.white,
      height: 50,
      maxWidth: '100%',
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: Colors.light.white,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      textAlign: 'center',
      color: Colors.light.black,
    },
  });
};
