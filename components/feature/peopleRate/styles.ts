import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';
import { PlatformOS } from '../../../utils/platform';

type Styles = {
  container: ViewStyle;
  userInfo: ViewStyle;
  userName: TextStyle;
  leafContainer: ViewStyle;
  ratingContainer: ViewStyle;
  commentText: TextStyle;
  image: ImageStyle;
  lastElement: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      paddingVertical: 20,
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 10,
    },
    userName: {
      fontSize: 12,
      fontFamily: 'PoppinsSemiBold',
      color: Colors.light.black,
    },
    leafContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
    commentText: {
      fontSize: 12,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
    },
    lastElement: {
      marginBottom: Platform.OS === PlatformOS.ANDROID ? 60 : 0,
    },
  });
};
