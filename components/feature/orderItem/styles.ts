import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  titleContainer: ViewStyle;
  infoContainer: ViewStyle;
  foodName: TextStyle;
  titleInfoContainer: ViewStyle;
  imageContainer: ViewStyle;
  categoryTitle: TextStyle;
  categoryValue: TextStyle;
  addItem: ViewStyle;
  addItemIcon: ViewStyle;
  countItem: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      marginRight: 55,
      marginBottom: 20,
      width: '100%',
      paddingVertical: 5,
    },
    headerPart: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    infoContainer: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      borderRadius: 10,
      width: '100%',
      height: 170,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    foodName: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
      marginBottom: 10,
    },
    titleInfoContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      position: 'relative',
    },
    categoryTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
    categoryValue: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
    },
    addItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
      marginTop: 15,
    },
    addItemIcon: {
      width: 28,
      height: 28,
      backgroundColor: Colors.light.defaultYellow,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    countItem: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
    },
  });
};
