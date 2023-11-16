import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  backgroundImage: ImageStyle;
  containerInformation: ViewStyle;
  description: TextStyle;
  overlay: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      height: '100%',
    },
    backgroundImage: {
      flex: 1,
    },
    containerInformation: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 90,
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      marginTop: 90,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  });
};
