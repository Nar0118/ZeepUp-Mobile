import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  image: ImageStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.defaultPink,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    imageContainer: {
      maxWidth: 350,
      width: '100%',
      height: 310,
      marginVertical: 60,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 36,
      textAlign: 'center',
      color: Colors.light.defaultYellow,
      marginBottom: 30,
      paddingHorizontal: 70,
    },
    description: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      fontWeight: '600',
      paddingHorizontal: 30,
    },
    image: {
      height: 310,
      width: 350,
    },
  });
};
