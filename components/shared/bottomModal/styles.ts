import { StyleSheet, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  modalView: ViewStyle;
  modalContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    modalView: {
      backgroundColor: Colors.light.white,
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: Colors.light.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 400,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
