import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  orderItemHeader: ViewStyle;
  arrowTitle: ViewStyle;
  boxContainer: ViewStyle;
  image: ImageStyle;
  orderItemDetails: ViewStyle;
  text: TextStyle;
  orderNumber: TextStyle;
  valueText: TextStyle;
  saveButton: ViewStyle;
  buttonText: TextStyle;
  buttonContainer: ViewStyle;
  line: ViewStyle;
  imageBottomText: ViewStyle;
  orderStatusText: TextStyle;
  greenColorText: TextStyle;
  pinkText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    boxContainer: {
      width: '100%',
      bottom: 0,
      backgroundColor: 'white',
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      borderRadius: 10,
      marginTop: 20,
      height: 210,
    },
    orderItemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    arrowTitle: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
    image: {
      width: 100,
      height: 73,
      borderRadius: 10,
    },
    orderItemDetails: {
      position: 'relative',
      top: -90,
    },
    text: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
    orderNumber: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.lightBlue,
      textDecorationLine: 'underline',
    },
    orderStatusText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
    greenColorText: {
      color: Colors.light.green,
    },
    valueText: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
    },
    saveButton: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      columnGap: 5,
      width: 90,
      height: 30,
      borderRadius: 50,
      backgroundColor: Colors.light.defaultYellow,
    },
    buttonText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.white,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 5,
      right: 10,
      columnGap: 40,
    },
    line: {
      marginVertical: 10,
      width: 180,
      borderBottomWidth: 0.7,
      borderBottomColor: Colors.light.inputBorderColor,
    },
    imageBottomText: {
      marginTop: 20,
    },
    pinkText: {
      color: Colors.light.defaultPink,
    },
  });
};
