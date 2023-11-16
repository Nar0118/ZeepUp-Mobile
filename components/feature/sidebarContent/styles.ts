import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  line: ViewStyle;
  drawerItemText: TextStyle;
  subItemText: TextStyle;
  drawerItem: ViewStyle;
  itemContainer: ViewStyle;
  subItem: ViewStyle;
  drawerItemTextIcon: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      height: '100%',
      backgroundColor: Colors.light.black,
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 15,
      color: Colors.light.white,
      marginTop: 20,
    },
    line: {
      marginVertical: 20,
      borderBottomWidth: 0.5,
      borderBottomColor: Colors.light.borderLine,
    },
    drawerItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 30,
    },
    drawerItemText: {
      fontFamily: 'PoppinsBold',
      fontSize: 12,
      color: Colors.light.white,
    },
    drawerItemTextIcon: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      color: Colors.light.white,
    },
    subItemText: {
      fontFamily: 'PoppinsBold',
      fontSize: 12,
      color: Colors.light.sidebarSubMenu,
      marginLeft: 50,
    },
    itemContainer: {
      marginBottom: 20,
    },
    subItem: {
      marginTop: 20,
    },
  });
};
