import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  modalContainer: ViewStyle;
  headerPart: ViewStyle;
  title: TextStyle;
  line: ViewStyle;
  infoContainer: ViewStyle;
  radioItem: ViewStyle;
  optionText: TextStyle;
  buttonContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    modalContainer: {
      width: '100%',
      paddingVertical: 20,
    },
    headerPart: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 24,
      color: Colors.light.black,
      textAlign: 'center',
    },
    line: {
      marginVertical: 25,
      borderBottomWidth: 0.7,
      borderBottomColor: Colors.light.inputBorderColor,
    },
    infoContainer: {
      paddingHorizontal: 20,
    },
    radioItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    optionText: {
      fontFamily: 'PoppinsMedium',
      fontSize: 15,
      color: Colors.light.black,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 20,
    },
  });
};
