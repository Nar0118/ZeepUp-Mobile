import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  closeContainer: ViewStyle;
  infoContainer: ViewStyle;
  headerPart: ViewStyle;
  title: ViewStyle;
  pinkText: ViewStyle;
  infoTextContainer: ViewStyle;
  aboutBuyer: ViewStyle;
  buyerTitle: TextStyle;
  smallText: TextStyle;
  lightText: TextStyle;
  line: ViewStyle;
  bottomInfo: ViewStyle;
  bottomValueText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.white,
      paddingVertical: 20,
      marginBottom: 20,
      width: '100%',
    },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
    },
    headerPart: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 16,
      color: Colors.light.black,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
    infoTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
    },
    aboutBuyer: {
      maxWidth: 170,
      marginRight: 10,
    },
    buyerTitle: {
      fontFamily: 'PoppinsBold',
      fontSize: 16,
      color: Colors.light.black,
      marginBottom: 10,
    },
    smallText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
      marginBottom: 5,
      maxWidth: 160,
    },
    lightText: {
      fontFamily: 'PoppinsLight',
    },
    line: {
      marginVertical: 20,
      marginHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: Colors.light.inputBorderColor,
    },
    bottomInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
      maxHeight: 40,
    },
    bottomValueText: {
      marginTop: 5,
    },
  });
};
