import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  image: ImageStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
  buttonDescription: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.light.white,
      paddingTop: 10,
    },
    image: {
      width: 290,
      height: 290,
    },
    infoContainer: {
      paddingHorizontal: 30,
      paddingVertical: 30,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 32,
      color: Colors.light.black,
      marginBottom: 30,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 20,
      color: Colors.light.black,
      marginBottom: 30,
      textAlign: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
    },
    buttonDescription: {
      fontFamily: 'PoppinsMedium',
      fontSize: 15,
      color: Colors.light.mediumGray,
      textAlign: 'center',
      marginTop: 10,
    },
  });
};
