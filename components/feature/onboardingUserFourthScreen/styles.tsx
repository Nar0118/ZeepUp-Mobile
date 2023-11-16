import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  backgroundImage: ImageStyle;
  containerInformation: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
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
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%',
    },
    image: {
      width: 295,
      height: 290,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 36,
      textAlign: 'center',
      color: Colors.light.defaultYellow,
      marginBottom: 50,
    },
    description: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      fontWeight: '500',
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
