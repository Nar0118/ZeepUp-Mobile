import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  infoContainer: ViewStyle;
  arrowContainer: ViewStyle;
  headerInfo: ViewStyle;
  soldByText: TextStyle;
  title: TextStyle;
  open: TextStyle;
  backgroundImage: ImageStyle;
  profilePicture: ImageStyle;
  foodTitle: TextStyle;
  priceContainer: ViewStyle;
  priceText: TextStyle;
  deletedText: TextStyle;
  percentText: TextStyle;
  button: ViewStyle;
  text: TextStyle;
  promotionText: TextStyle;
  promotionValues: TextStyle;
  likeItemsTitle: TextStyle;
  lineContainer: ViewStyle;
  line: ViewStyle;
  opening: ViewStyle;
  openingText: TextStyle;
  itemImage: ImageStyle;
  itemContainer: ViewStyle;
  itemWrapper: ViewStyle;
  itemTitle: TextStyle;
  itemValue: TextStyle;
  itemPriceText: TextStyle;
  optionContainer: ViewStyle;
  option: ViewStyle;
  optionTitle: TextStyle;
  optionText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
      paddingBottom: 300,
    },
    imageContainer: {
      position: 'relative',
    },
    infoContainer: {
      backgroundColor: Colors.light.white,
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      paddingHorizontal: 15,
      paddingVertical: 15,
      position: 'absolute',
      bottom: -10,
      left: 0,
      right: 0,
      top: '55%',
      flex: 1,
    },
    arrowContainer: {
      position: 'absolute',
      top: 50,
      left: 30,
    },
    headerInfo: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 15,
    },

    soldByText: {
      fontFamily: 'PoppinsLight',
      fontSize: 11,
      color: Colors.light.black,
    },
    title: {
      fontFamily: 'PoppinsMedium',
      fontSize: 14,
      color: Colors.light.black,
    },
    open: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.defaultPink,
    },
    backgroundImage: {
      height: 370,
    },

    profilePicture: {
      width: 35,
      height: 35,
      borderRadius: 50,
    },
    foodTitle: {
      fontFamily: 'PoppinsBold',
      fontSize: 22,
      color: Colors.light.black,
      marginTop: 10,
      marginBottom: 20,
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      columnGap: 5,
    },
    priceText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 18,
      color: Colors.light.black,
    },
    deletedText: {
      fontFamily: 'PoppinsLight',
      fontSize: 15,
      color: Colors.light.black,
      textDecorationLine: 'line-through',
    },
    percentText: {
      color: Colors.light.green,
    },
    button: {
      backgroundColor: Colors.light.defaultPink,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      paddingHorizontal: 10,
      height: 45,
      borderRadius: 50,
      columnGap: 5,
      maxWidth: 150,
    },
    text: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.white,
    },
    promotionText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      color: Colors.light.black,
      marginBottom: 20,
    },
    promotionValues: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
    },
    likeItemsTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      color: Colors.light.black,
      marginVertical: 20,
    },
    lineContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
    },
    line: {
      borderBottomColor: Colors.light.borderLine,
      borderBottomWidth: 2,
      paddingHorizontal: 20,
      width: '80%',
    },
    opening: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    openingText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 20,
      color: Colors.light.black,
      marginVertical: 20,
    },
    itemImage: {
      width: 65,
      height: 65,
      borderRadius: 5,
    },
    itemWrapper: {
      display: 'flex',
      gap: 10,
    },
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    itemTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
    itemValue: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: Colors.light.black,
    },
    itemPriceText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      color: Colors.light.black,
    },
    optionContainer: {
      paddingBottom: 60,
    },
    option: {
      width: 115,
      height: 60,
      backgroundColor: Colors.light.white,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.light.defaultPink,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    optionTitle: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
      fontWeight: 'bold',
    },
    optionText: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: 12,
      color: Colors.light.black,
    },
  });
};
