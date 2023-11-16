import { Dimensions, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';
import { PlatformOS } from '../../utils/platform';
import { ImageStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  userName: TextStyle;
  userEmail: TextStyle;
  infoContainerHeader: ViewStyle;
  buttonContainer: ViewStyle;
  itemsContainer: ViewStyle;
  iconContainer: ViewStyle;
  titleContainer: ViewStyle;
  tableTitle: TextStyle;
  tableItem: ViewStyle;
  imageInfoContainer: ViewStyle;
  backgroundImage: ViewStyle;
  backgroundImageTop: ImageStyle;
  bottomContainer: ViewStyle;
  arrowContainer: ViewStyle;
};

const screenWidth = Dimensions.get('window').width;

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    backgroundImageTop: {
      width: screenWidth,
    },
    imageInfoContainer: {
      paddingBottom: 20,
    },
    imageContainer: {
      position: 'relative',
    },
    userName: {
      fontSize: 16,
      fontFamily: 'PoppinsSemiBold',
      color: Colors.light.black,
      textAlign: 'center',
      marginTop: 15,
    },
    userEmail: {
      fontSize: 12,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
      textAlign: 'center',
      marginTop: 5,
    },
    arrowContainer: {
      position: 'absolute',
      left: 10,
      top: 50,
    },
    itemsContainer: {
      paddingHorizontal: 40,
    },
    infoContainerHeader: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 100,
    },
    bottomContainer: {
      paddingTop: 20,
      height: 450,
      marginBottom: 300,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    backgroundImage: {
      paddingTop: 10,
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 20,
    },
    iconContainer: {
      width: 32,
      height: 32,
      backgroundColor: Colors.light.inputBorderColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    tableTitle: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      color: Colors.light.black,
    },
    tableItem: {
      marginBottom: 15,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
};
