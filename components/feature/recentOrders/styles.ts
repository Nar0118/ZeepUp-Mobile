import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  text: TextStyle;
  pinkText: TextStyle;
  orderContainer: ViewStyle;
  cancelText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      marginLeft: 20,
      marginBottom: 20,
      width: 290,
      padding: 15,
      height: 130,
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: Colors.light.white,
    },
    headerPart: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
    orderContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    cancelText: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.defaultYellow,
      textDecorationLine: 'underline',
      textAlign: 'right',
    },
  });
};
