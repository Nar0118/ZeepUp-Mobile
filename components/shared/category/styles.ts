import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  itemContainer: ViewStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  image: ImageStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      marginRight: 10,
      height: 120,
      marginBottom: 20,
    },
    itemContainer: {
      height: 120,
      borderWidth: 2,
      borderColor: Colors.light.inputBorderColor,
      borderRadius: 10,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'PoppinsMedium',
      fontSize: 13,
      color: Colors.light.black,
      maxWidth: 90,
    },
    textContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    image: {
      borderTopLeftRadius: 9,
      borderTopRightRadius: 9,
    },
  });
};
