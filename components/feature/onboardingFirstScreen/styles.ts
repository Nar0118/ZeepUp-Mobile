import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  welcomeText: TextStyle;
  welcomeDescription: TextStyle;
  buttonContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 110,
    },
    welcomeText: {
      fontFamily: 'PoppinsBold',
      fontSize: 36,
      textAlign: 'center',
      fontWeight: '500',
      color: Colors.light.defaultPink,
      marginTop: 20,
    },
    welcomeDescription: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '400',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      marginTop: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 15,
    },
  });
};
