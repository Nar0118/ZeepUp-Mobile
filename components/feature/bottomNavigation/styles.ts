import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  iconContainer: ViewStyle;
  iconInfo: ViewStyle;
  buyContainer: ViewStyle;
  text: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      width: '100%',
      height: 80,
      backgroundColor: Colors.light.defaultPink,
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: 25,
      display: 'flex',
      justifyContent: 'center',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: 60,
    },
    text: {
      fontFamily: 'PoppinsLight',
      fontSize: 10,
      textAlign: 'center',
      color: Colors.light.white,
      marginTop: 5,
    },
    buyContainer: {
      width: 83,
      height: 83,
      backgroundColor: Colors.light.defaultYellow,
      borderRadius: 50,
      borderWidth: 10,
      borderColor: Colors.light.white,
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      bottom: 40,
      paddingBottom: 5,
      shadowColor: Colors.light.black,
      shadowOffset: {
        width: 0,
        height: 15,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });
};
