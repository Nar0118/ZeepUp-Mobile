import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  switchRow: ViewStyle;
  label: TextStyle;
  buttonContainerBottom: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      padding: 20,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 20,
      marginBottom: 50,
    },
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    label: {
      fontFamily: 'PoppinsLight',
      fontSize: 15,
      color: Colors.light.black,
    },
    buttonContainerBottom: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
