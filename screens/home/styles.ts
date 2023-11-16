import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';
import { PlatformOS } from '../../utils/platform';

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  flatListCategories: ViewStyle;
  scrollCategoryItems: ViewStyle;
  twoContainer: ViewStyle;
  title: TextStyle;
  modalTitle: TextStyle;
  line: ViewStyle;
  modalContainer: ViewStyle;
  modalFilterPart: ViewStyle;
  buttonContainer: ViewStyle;
  flatListContainerStyles: ViewStyle;
  filterName: TextStyle;
  categoriesTitle: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    infoContainer: {
      flex: 1,
      paddingBottom: 100,
    },
    flatListCategories: {
      paddingLeft: 20,
    },
    flatListContainerStyles: {
      paddingRight: 40,
    },
    categoriesTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
      marginBottom: 10,
      marginTop: Platform.OS === PlatformOS.ANDROID ? 20 : 0,
      paddingLeft: 20,
    },
    title: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.defaultPink,
      marginBottom: 10,
      marginTop: Platform.OS === PlatformOS.ANDROID ? 20 : 0,
      paddingLeft: 20,
    },
    scrollCategoryItems: {
      paddingBottom: 100,
    },
    twoContainer: {
      flexDirection: 'row',
      paddingLeft: 20,
    },
    modalContainer: {
      width: '100%',
      paddingVertical: 20,
    },
    modalTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 24,
      color: Colors.light.black,
      textAlign: 'center',
      marginBottom: 20,
    },
    line: {
      borderBottomWidth: 0.7,
      borderBottomColor: Colors.light.inputBorderColor,
    },
    modalFilterPart: {
      paddingHorizontal: 20,
    },
    filterName: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
      marginBottom: 10,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 20,
      marginTop: 30,
    },
  });
};
