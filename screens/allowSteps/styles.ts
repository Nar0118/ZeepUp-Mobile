import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
  });
};
