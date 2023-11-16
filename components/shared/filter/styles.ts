import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  section: ViewStyle;
  sectionTitle: TextStyle;
  optionContainer: ViewStyle;
  option: ViewStyle;
  selectedOption: TextStyle;
  optionText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    section: {
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
    optionContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: 10,
    },
    option: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      borderRadius: 5,
      minWidth: 56,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedOption: {
      borderColor: Colors.light.defaultPink,
    },
    optionText: {
      fontFamily: 'PoppinsLight',
      fontSize: 10,
      marginHorizontal: 10,
    },
  });
};
