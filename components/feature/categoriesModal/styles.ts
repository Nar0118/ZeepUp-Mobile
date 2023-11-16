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
  radioContainer: ViewStyle;
  searchContainer: ViewStyle;
  searchPart: ViewStyle;
  searchIcon: ViewStyle;
  inputStyle: ViewStyle;
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
      marginTop: 25,
      borderBottomWidth: 0.7,
      borderBottomColor: Colors.light.inputBorderColor,
    },
    infoContainer: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    radioItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 15,
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
    },
    radioContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    searchContainer: {
      paddingHorizontal: 15,
    },
    searchPart: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
      paddingHorizontal: 10,
    },
    searchIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.light.defaultPink,
      width: 30,
      height: 30,
      borderRadius: 10,
    },
    inputStyle: {
      width: '100%',
      height: 40,
    },
  });
};
