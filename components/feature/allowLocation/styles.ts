import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
  buttonDescription: TextStyle;
  containerInformation: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
    },
    containerInformation: {
      marginTop: 200,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 32,
      color: Colors.light.defaultYellow,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 20,
      color: Colors.light.white,
      marginTop: 100,
      textAlign: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 200,
    },
    buttonDescription: {
      fontFamily: 'PoppinsMedium',
      fontSize: 15,
      color: Colors.light.white,
      textAlign: 'center',
      marginTop: 15,
    },
  });
};
