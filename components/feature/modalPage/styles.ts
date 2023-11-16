import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  imageContainer: ImageStyle;
  childrenContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    imageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      right: 0,
    },
    childrenContainer: {
      height: '70%',
    },
  });
};
