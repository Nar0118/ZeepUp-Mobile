import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  titleContainer: ViewStyle;
  infoContainer: ViewStyle;
  leafContainer: ViewStyle;
  name: TextStyle;
  destinationText: ViewStyle;
  foodName: TextStyle;
  foodDescription: TextStyle;
  titleInfoContainer: ViewStyle;
  imageContainer: ViewStyle;
  plusContainer: ViewStyle;
  priceContainer: ViewStyle;
  priceText: TextStyle;
  percentText: TextStyle;
  deletedText: TextStyle;
  openTextStyles: TextStyle;
  shadowWrapper: ViewStyle;
  iconContainer: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      marginRight: 30,
      marginBottom: 20,
      width: 290,
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
    shadowWrapper: {
      width: '100%',
      bottom: 0,
      backgroundColor: 'white',
      shadowColor: Colors.light.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      borderRadius: 10,
    },
    iconContainer: {
      marginHorizontal: 5,
    },
    infoContainer: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      borderRadius: 10,
      width: 290,
      height: 130,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    leafContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 5,
    },
    name: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
    },
    destinationText: {
      fontFamily: 'PoppinsMedium',
      fontSize: 12,
      color: Colors.light.black,
    },
    foodName: {
      fontFamily: 'PoppinsMedium',
      fontSize: 14,
      color: Colors.light.black,
      maxWidth: 150,
    },
    foodDescription: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
      maxWidth: 120,
    },
    titleInfoContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    plusContainer: {
      position: 'absolute',
      right: -8,
      bottom: -15,
    },
    imageContainer: {
      position: 'relative',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 20,
    },
    priceText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
    },
    percentText: {
      color: Colors.light.green,
      fontSize: 13,
    },
    deletedText: {
      fontSize: 13,
      fontFamily: 'PoppinsLight',
      textDecorationLine: 'line-through',
    },
    openTextStyles: {
      color: Colors.light.defaultPink,
      fontSize: 12,
      fontFamily: 'PoppinsSemiBold',
    },
  });
};
