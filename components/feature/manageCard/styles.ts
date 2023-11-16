import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  cardContainer: ViewStyle;
  textContainer: TextStyle;
  text: TextStyle;
  textValue: TextStyle;
  cardType: ViewStyle;
  line: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    cardContainer: {
      bottom: 0,
      backgroundColor: Colors.light.white,
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginTop: 20,
    },
    textContainer: {
      marginBottom: 10,
    },
    text: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 14,
      color: Colors.light.black,
    },
    textValue: {
      fontFamily: 'PoppinsLight',
    },
    cardType: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
    },
    line: {
      marginVertical: 10,
      borderBottomWidth: 0.7,
      marginHorizontal: 20,
      borderBottomColor: Colors.light.inputBorderColor,
    },
  });
};
