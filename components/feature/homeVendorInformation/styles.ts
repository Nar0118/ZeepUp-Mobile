import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  coloredText: TextStyle;
  restaurantInfo: ViewStyle;
  restaurantTitle: TextStyle;
  stepInfo: ViewStyle;
  stepsTitle: TextStyle;
  stepContainer: ViewStyle;
  infoText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      padding: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 22,
      color: Colors.light.black,
    },
    coloredText: {
      color: Colors.light.defaultPink,
    },
    restaurantInfo: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 20,
      alignItems: 'center',
      columnGap: 5,
    },
    restaurantTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
    stepsTitle: {
      fontFamily: 'PoppinsBold',
      fontSize: 12,
      color: Colors.light.defaultPink,
      marginBottom: 10,
    },
    stepInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    stepContainer: {
      maxWidth: 150,
    },
    infoText: {
      fontFamily: 'PoppinsBold',
      fontSize: 12,
      textDecorationLine: 'underline',
    },
  });
};
