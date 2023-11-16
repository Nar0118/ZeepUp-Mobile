import { StyleSheet, ViewStyle, TextStyle, Platform } from 'react-native';
type Styles = {
  container: ViewStyle;
};

export const getStyles = () => {
  return StyleSheet.create<Styles>({
    container: {
      borderTopWidth: 1,
      borderTopColor: 'red',
      minHeight: Platform.OS === 'ios' ? 100 : 70,
      paddingTop: 10,
      display: 'flex',
      justifyContent: 'space-around',
    },
  });
};
