import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
  titleContainer: ViewStyle;
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
    text: {
      fontFamily: 'PoppinsLight',
      fontSize: 15,
      color: Colors.light.defaultPink,
      textDecorationLine: 'underline',
      marginBottom: 40,
    },
  });
};
