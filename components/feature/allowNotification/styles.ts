import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
  iconContainer: ViewStyle;
  buttonDescription: TextStyle;
  image: ImageStyle;
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const screenHeightPercent = screenHeight * 0.4;

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: 'flex',
    },
    image: {
      width: screenWidth,
      height: screenHeightPercent,
    },
    infoContainer: {
      backgroundColor: Colors.light.white,
      overflow: 'hidden',
      height: '100%',
      paddingHorizontal: 30,
      paddingVertical: 30,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 30,
      color: Colors.light.defaultYellow,
      marginBottom: 20,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'PoppinsMedium',
      fontSize: 19,
      color: Colors.light.mediumGray,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
