import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  line: ViewStyle;
  text: TextStyle;
  valueText: TextStyle;
  textCenter: TextStyle;
  toggleContainer: ViewStyle;
  bottomContainer: ViewStyle;
  bottomInfoContainer: ViewStyle;
  buttonContainerBottom: ViewStyle;
  greenText: TextStyle;
  itemText: TextStyle;
  bigLine: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      marginBottom: 20,
      width: '90%',
      paddingVertical: 20,
      backgroundColor: Colors.light.white,
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    toggleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    bottomContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginVertical: 10,
    },
    bottomInfoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    line: {
      marginVertical: 10,
      marginHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: Colors.light.borderLine,
    },
    bigLine: {
      marginVertical: 20,
    },
    greenText: {
      color: Colors.light.green,
    },
    buttonContainerBottom: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    text: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 14,
      color: Colors.light.black,
      marginBottom: 5,
    },
    textCenter: {
      textAlign: 'center',
    },
    valueText: {
      fontFamily: 'PoppinsLight',
      fontSize: 14,
      color: Colors.light.black,
    },
    itemText: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
    },
  });
};
