import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  headerContainer: ViewStyle;
  itemsContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
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
    inputStyle: {
      height: 40,
    },
    headerContainer: {
      padding: 20,
    },
    inputContainer: {
      marginVertical: 40,
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
    },
    itemsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });
};
