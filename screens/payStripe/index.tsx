import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';
import ModalPage from '../../components/feature/modalPage';
import Button from '../../components/shared/button';
import Input from '../../components/shared/inputWithLabel';
import { DropdownMenu } from '../../components/shared/dropDown';
import { BottomNavigator } from '../../utils/bottomNavigation';
import Cards from '../../assets/images/icons/paymentCards.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const PayStripe = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const fakeData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const redirectToConfirmPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.ORDER_CONFIRMED);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled={Platform.OS === 'ios'}>
        <View style={styles.container}>
          <ModalPage image={require('../../assets/images/images/forgotPassword.png')}>
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.title}>Pay now via Stripe</Text>
              <View style={styles.inputs}>
                <Input
                  placeholder='VISA/MasterCard/American Express'
                  placeholderTextColor={Colors.light.inputBorderColor}
                  label='Card Type'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  placeholder='John Doe'
                  placeholderTextColor={Colors.light.inputBorderColor}
                  label='Name on Card'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  isNumeric
                />
              </View>
              <View style={styles.inputs}>
                <Input
                  icon={<Cards width={80} height={15} />}
                  placeholder='1234 0000 0000 0000'
                  placeholderTextColor={Colors.light.inputBorderColor}
                  label='Card Number'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  isNumeric
                />
              </View>
              <View style={styles.dropdownContainer}>
                <View>
                  <Text style={styles.label}>Expiry Month</Text>
                  <View style={{ width: screenWidth - 260 }}>
                    <DropdownMenu
                      item={fakeData}
                      dropdownStyle={styles.dropdown}
                      onChange={() => {}}
                      placeholderText='mm'
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Expiry Year</Text>
                  <View style={{ width: screenWidth - 260 }}>
                    <DropdownMenu
                      item={fakeData}
                      dropdownStyle={styles.dropdown}
                      onChange={() => {}}
                      placeholderText='yyyy'
                    />
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Pay now'
                  onPress={redirectToConfirmPage}
                  width={90}
                  height={30}
                  fontSize={12}
                  backgroundColor={Colors.light.defaultYellow}
                  textColor={Colors.light.white}
                />
              </View>
            </ScrollView>
          </ModalPage>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default PayStripe;
