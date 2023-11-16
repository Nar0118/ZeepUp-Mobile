import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  icon: ViewStyle;
  input: ViewStyle;
  label: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    label: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
      marginBottom: 10,
    },
  });
};
