import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/shared/inputWithLabel';
import Button from '../../components/shared/button';
import { BottomNavigator } from '../../utils/bottomNavigation';
import Phone from '../../assets/images/icons/phone.svg';
import Calendar from '../../assets/images/icons/calendarPink.svg';
import Time from '../../assets/images/icons/timePink.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const PaymentPage = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToPayPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.PAY_NOW);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled={Platform.OS === 'ios'}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Collection Information</Text>
        <View style={styles.inputs}>
          <Input
            label='Your name'
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label='Phone'
            icon={<Phone width={24} height={24} />}
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
            isNumeric
          />
        </View>
        <View style={styles.inputs}>
          <Input
            label='Your Email'
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
          />
        </View>
        <View style={styles.inputs}>
          <Input label='City' style={styles.inputStyle} containerStyles={styles.inputContainer} />
        </View>
        <View style={styles.twoInputs}>
          <Input
            icon={<Calendar width={24} height={24} />}
            label='Collection Date'
            style={styles.dateInputStyle}
            containerStyles={styles.dateInputContainer}
            placeholder='dd-mm-yyyy'
            placeholderTextColor={Colors.light.inputBorderColor}
            isNumeric
          />
          <Input
            icon={<Time width={24} height={24} />}
            label='Collection Time'
            style={styles.dateInputStyle}
            containerStyles={styles.dateInputContainer}
            placeholder='hh:mm'
            placeholderTextColor={Colors.light.inputBorderColor}
            isNumeric
          />
        </View>
        <View style={styles.restaurantInfo}>
          <Text style={styles.infoTitle}>Primo Mercato</Text>
          <Text style={styles.infoDescription}>1200 Morris Tpke</Text>
          <Text style={styles.infoDescription}>07078</Text>
          <Text style={styles.infoDescription}>Short Hills, New Jersey</Text>
          <Text style={styles.infoDescription}>Italian restaurant</Text>
          <View style={styles.phoneNumber}>
            <Phone width={17} height={17} />
            <Text style={[styles.infoDescription, styles.underlineText]}>+1-973-609-9071</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Proceed to Checkout'
            onPress={redirectToPayPage}
            width={230}
            height={55}
            fontSize={15}
            backgroundColor={Colors.light.defaultPink}
            textColor={Colors.light.white}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PaymentPage;
