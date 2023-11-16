import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  cardContainer: ViewStyle;
  card: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
  cardText: TextStyle;
  containerCard: ViewStyle;
  backgroundYellow: ViewStyle;
  orderTitle: TextStyle;
  modalContainer: ViewStyle;
  closeContainer: ViewStyle;
  modalTitle: TextStyle;
  buttonContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 100,
    },
    iconContainer: {
      width: 45,
      height: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.light.white,
      shadowColor: Colors.light.black,
      borderRadius: 50,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.5,
      elevation: 3,
    },
    card: {
      width: 125,
      height: 115,
      borderWidth: 1,
      backgroundColor: Colors.light.white,
      borderColor: Colors.light.defaultPink,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 5,
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    textContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 20,
      width: '100%',
    },
    cardText: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.defaultPink,
    },
    containerCard: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 40,
      marginTop: 20,
    },
    backgroundYellow: {
      backgroundColor: Colors.light.defaultYellow,
      borderWidth: 0,
    },
    orderTitle: {
      fontFamily: 'PoppinsBold',
      fontSize: 12,
      color: Colors.light.defaultPink,
      marginBottom: 10,
      paddingLeft: 20,
    },
    modalContainer: {
      backgroundColor: Colors.light.white,
      paddingVertical: 20,
      width: '100%',
    },
    closeContainer: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    modalTitle: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 10,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 80,
      marginBottom: 40,
    },
  });
};
