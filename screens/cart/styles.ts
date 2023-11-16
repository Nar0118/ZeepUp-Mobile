import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  orderTitle: TextStyle;
  aboutPrice: TextStyle;
  price: TextStyle;
  buttonContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      paddingHorizontal: 15,
      paddingVertical: 20,
    },
    headerPart: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      columnGap: 15,
      marginBottom: 10,
    },
    orderTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      color: Colors.light.black,
    },
    aboutPrice: {
      fontFamily: 'PoppinsLight',
      fontSize: 18,
      color: Colors.light.defaultPink,
    },
    price: {
      fontFamily: 'PoppinsMedium',
      fontSize: 18,
      color: Colors.light.defaultPink,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 15,
    },
  });
};
