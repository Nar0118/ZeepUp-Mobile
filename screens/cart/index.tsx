import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { OrderItem } from '../../components/feature/orderItem';
import Button from '../../components/shared/button';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { cardStore } from './fakeData';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const Cart = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToPaymentPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.PAYMENT_PAGE);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerPart}>
        <Text style={styles.orderTitle}>Order details</Text>
        <Text style={styles.aboutPrice}>Total</Text>
        <Text style={styles.price}>$20.00</Text>
      </View>
      <FlatList
        data={cardStore}
        renderItem={({ item, index }) => <OrderItem data={item} key={index} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Proceed to Checkout'
          onPress={redirectToPaymentPage}
          width={230}
          height={55}
          fontSize={15}
          backgroundColor={Colors.light.defaultPink}
          textColor={Colors.light.white}
        />
      </View>
    </View>
  );
};

export default Cart;
