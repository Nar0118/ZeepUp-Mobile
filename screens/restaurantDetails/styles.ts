import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  profileImage: ViewStyle;
  infoContainerHeader: ViewStyle;
  rateContainer: ViewStyle;
  rateNumber: ViewStyle;
  rateText: TextStyle;
  selectRate: TextStyle;
  rateScore: TextStyle;
  title: TextStyle;
  openText: TextStyle;
  titleContainer: ViewStyle;
  infoContainerSearch: ViewStyle;
  filterText: TextStyle;
  yellowColor: ViewStyle;
  pinkColor: ViewStyle;
  greenColor: ViewStyle;
  filter: ViewStyle;
  coloredContainer: ViewStyle;
  inputContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputMainContainer: ViewStyle;
  chooseCategory: ViewStyle;
  menuTitle: TextStyle;
  categoryContainer: ViewStyle;
  arrowContainer: ViewStyle;
  indicatorContainer: ViewStyle;
  modalContainer: ViewStyle;
  closeContainer: ViewStyle;
  modalTitle: TextStyle;
  dropdown: ViewStyle;
  label: TextStyle;
  inputContainerSmall: TextStyle;
  inputStyleSmall: TextStyle;
  buttonContainer: ViewStyle;
  ratingContainer: ViewStyle;
  errorMessage: TextStyle;
  rateTitle: TextStyle;
  rateInformation: ViewStyle;
  basedText: TextStyle;
  leafSection: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.light.black,
      width: 168,
      height: 168,
      borderRadius: 100,
      borderWidth: 20,
      borderColor: Colors.light.white,
      position: 'absolute',
      bottom: -35,
    },
    infoContainerHeader: {
      paddingHorizontal: 10,
      marginTop: 40,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-start',
      columnGap: 10,
    },
    rateContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    rateNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      columnGap: 5,
      height: 20,
      width: 50,
      borderRadius: 5,
      paddingHorizontal: 5,
      backgroundColor: Colors.light.green,
    },
    rateText: {
      fontSize: 10,
      fontFamily: 'PoppinsLight',
      color: Colors.light.white,
    },
    selectRate: {
      fontSize: 8,
      fontFamily: 'PoppinsLight',
      color: Colors.light.lightBlue,
      marginTop: 5,
    },
    rateScore: {
      fontSize: 10,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
      textDecorationLine: 'underline',
      marginLeft: 5,
    },
    title: {
      fontSize: 12,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 10,
    },
    openText: {
      textAlign: 'center',
      fontSize: 12,
      fontFamily: 'PoppinsBold',
      color: Colors.light.defaultPink,
    },
    infoContainerSearch: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginTop: 20,
      columnGap: 10,
    },
    filter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: 60,
      height: 20,
      textAlign: 'center',
      borderRadius: 50,
    },
    filterText: {
      fontSize: 10,
      fontFamily: 'PoppinsSemiBold',
      color: Colors.light.white,
    },
    yellowColor: {
      backgroundColor: Colors.light.defaultYellow,
    },
    pinkColor: {
      backgroundColor: Colors.light.defaultPink,
    },
    greenColor: {
      backgroundColor: Colors.light.green,
    },
    coloredContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
    inputContainer: {
      borderColor: Colors.light.inputBorderColor,
      borderWidth: 1,
      width: '45%',
      paddingHorizontal: 5,
    },
    inputStyle: {
      height: 32,
    },
    inputMainContainer: {
      display: 'flex',
      alignItems: 'center',
      rowGap: 20,
      paddingHorizontal: 30,
    },
    chooseCategory: {
      paddingHorizontal: 10,
      marginTop: 20,
    },
    menuTitle: {
      fontSize: 14,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    categoryContainer: {
      paddingHorizontal: 10,
      marginTop: 20,
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    indicatorContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      backgroundColor: Colors.light.white,
      paddingVertical: 20,
      width: '100%',
    },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    modalTitle: {
      fontSize: 24,
      fontFamily: 'PoppinsBold',
      color: Colors.light.black,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
      width: 250,
    },
    label: {
      marginVertical: 10,
      fontSize: 12,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
    },
    inputContainerSmall: {
      width: 250,
      height: 100,
      borderWidth: 1,
      borderColor: Colors.light.inputBorderColor,
    },
    inputStyleSmall: {
      height: 100,
      width: 250,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
    errorMessage: {
      marginBottom: 5,
      fontSize: 10,
      fontFamily: 'PoppinsLight',
      color: Colors.light.red,
    },
    rateInformation: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rateTitle: {
      fontSize: 35,
      fontFamily: 'PoppinsSemiBold',
      color: Colors.light.black,
    },
    basedText: {
      fontSize: 12,
      fontFamily: 'PoppinsLight',
      color: Colors.light.black,
    },
    leafSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 5,
    },
  });
};
