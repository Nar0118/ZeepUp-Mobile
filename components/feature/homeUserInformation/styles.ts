import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  coloredText: TextStyle;
  locationContainer: ViewStyle;
  infoPart: ViewStyle;
  searchPart: ViewStyle;
  searchIcon: ViewStyle;
  inputStyle: ViewStyle;
  inputContainer: ViewStyle;
  microphoneIcon: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 22,
      color: Colors.light.black,
    },
    coloredText: {
      color: Colors.light.defaultPink,
    },
    locationContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 15,
    },
    infoPart: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    searchPart: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 20,
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
    inputContainer: {
      width: '80%',
    },
    microphoneIcon: {
      borderLeftColor: Colors.light.inputBorderColor,
      borderLeftWidth: 1,
      paddingLeft: 10,
      paddingVertical: 5,
    },
  });
};
