import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  icon: ViewStyle;
  input: ViewStyle;
  iconContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      alignItems: 'center',
      borderRadius: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    iconContainer: {
      paddingLeft: 10,
    },
  });
};
