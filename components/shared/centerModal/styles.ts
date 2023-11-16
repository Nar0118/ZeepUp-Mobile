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
      width: '90%',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
