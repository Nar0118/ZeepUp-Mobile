import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/shared/button';
import ModalPage from '../../components/feature/modalPage';
import { BottomNavigator } from '../../utils/bottomNavigation';
import Confirmed from '../../assets/images/icons/confirmed.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const OrderConfirmed = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToHomePage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.HOME);
    }
  };

  return (
    <View style={styles.container}>
      <ModalPage image={require('../../assets/images/images/forgotPassword.png')}>
        <View style={styles.infoContainer}>
          <Confirmed width={80} height={80} />
          <Text style={styles.title}>Your Order is Confirmed!</Text>
          <Text style={styles.orderNumber}>
            Order No: <Text style={styles.underlineText}>ZEEPUP - 0263</Text>
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title='SAVE MORE FOOD!'
              onPress={redirectToHomePage}
              width={230}
              height={55}
              fontSize={15}
              backgroundColor={Colors.light.green}
              textColor={Colors.light.white}
            />
          </View>
        </View>
      </ModalPage>
    </View>
  );
};

export default OrderConfirmed;
