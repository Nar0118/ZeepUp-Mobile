import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  cancelOrderText: TextStyle;
  iconText: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  itemsContainer: ViewStyle;
  closeContainer: ViewStyle;
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
      justifyContent: 'space-between',
      columnGap: 10,
      marginBottom: 50,
    },
    cancelOrderText: {
      fontFamily: 'PoppinsBold',
      fontSize: 14,
      color: Colors.light.black,
      textDecorationLine: 'underline',
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    inputStyle: {
      height: 40,
    },
    inputContainer: {
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    itemsContainer: {
      marginTop: 50,
    },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });
};
