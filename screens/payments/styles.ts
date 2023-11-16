import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  buttonContainer: ViewStyle;
  headerPart: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    infoContainer: {
      backgroundColor: Colors.light.white,
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
      overflow: 'hidden',
      height: '100%',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    headerPart: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      marginVertical: 20,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      marginBottom: 20,
    },
  });
};
