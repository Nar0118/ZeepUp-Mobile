import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  scrollCategoryItems: ViewStyle;
  twoContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    title: {
      fontSize: 24,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
      marginBottom: 25,
      paddingTop: 20,
    },
    scrollCategoryItems: {
      paddingBottom: 20,
      paddingLeft: 20,
    },
    twoContainer: {
      flexDirection: 'row',
    },
  });
};
