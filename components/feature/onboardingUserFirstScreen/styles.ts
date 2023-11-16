import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.defaultYellow,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    imageContainer: {
      marginVertical: 70,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 36,
      fontWeight: '500',
      textAlign: 'center',
      color: Colors.light.defaultPink,
      marginBottom: 30,
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 20,
      textAlign: 'center',
      color: Colors.light.white,
      fontWeight: '300',
    },
  });
};
