import { StyleSheet, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  dropdown: ViewStyle;
  dropdownItem: ViewStyle;
  dropdownMenu: ViewStyle;
  dropdownMenuContainer: ViewStyle;
  dropdownButton: ViewStyle;
  text: ViewStyle;
  dropdownMenuContainerSmall: ViewStyle;
  inputText: ViewStyle;
  containerWithIcon: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    text: {
      color: Colors.light.defaultPink,
    },
    dropdown: {
      backgroundColor: Colors.light.white,
      borderWidth: 0,
      width: '95%',
      borderRadius: 10,
    },
    dropdownItem: {
      justifyContent: 'center',
    },
    dropdownMenu: {
      marginTop: 112,
    },
    dropdownMenuContainer: {
      zIndex: 100,
      position: 'relative',
      top: 0,
      height: 200,
      borderWidth: 0,
      borderTopWidth: 1,
      width: 500,
    },
    dropdownMenuContainerSmall: {
      height: 50,
    },
    dropdownButton: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.light.black,
      paddingVertical: 10,
    },
    container: {
      backgroundColor: Colors.light.white,
      borderRadius: 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerWithIcon: {
      paddingHorizontal: 10,
    },
    inputText: {
      color: Colors.light.placeholderGrey,
      fontSize: 16,
      textAlign: 'left',
      marginHorizontal: 0,
    },
  });
};
