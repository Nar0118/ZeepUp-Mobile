import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  searchPart: ViewStyle;
  searchIcon: ViewStyle;
  inputStyle: ViewStyle;
  searchContainer: ViewStyle;
  scrollCategoryItems: ViewStyle;
  twoContainer: ViewStyle;
  filterContainer: ViewStyle;
  filterInfo: ViewStyle;
  infoText: TextStyle;
  categoryName: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      paddingTop: 20,
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
    searchContainer: {
      paddingHorizontal: 15,
    },
    scrollCategoryItems: {
      paddingBottom: 20,
      paddingLeft: 20,
      marginTop: 20,
    },
    twoContainer: {
      flexDirection: 'row',
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 15,
    },
    filterInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 20,
      borderWidth: 1,
      columnGap: 5,
      borderColor: Colors.light.inputBorderColor,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    infoText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 11,
      color: Colors.light.black,
    },
    categoryName: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 22,
      color: Colors.light.defaultPink,
      marginTop: 15,
    },
  });
};
