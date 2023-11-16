import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import useAsyncEffect from 'use-async-effect';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';
import OrderInformation from '../../components/feature/orderInforamation';
import Input from '../../components/shared/inputWithLabel';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { ordersData } from './types';
import OrderList from '../../assets/images/icons/order.svg';
import Cancel from '../../assets/images/icons/cancelBlack.svg';
import { OrdersService } from '../../services/orders.service';
import { IOrders } from '../../interfaces/orders.interface';
import { ApiError } from '../../services/ApiBase';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';
const Order = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const ordersService = new OrdersService();

  const [orders, setOrders] = useState<Array<IOrders>>([]);

  const redirectToCancelOrderPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.CANCELLED_ORDER);
    }
  };

  const getOrders = async (): Promise<void> => {
    const data: Array<IOrders> | ApiError = await ordersService.getOrders();

    if ('errorMessage' in data) {
      return;
    }

    setOrders(data as Array<IOrders>);
  };

  useAsyncEffect(async () => {
    await getOrders();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.iconText}>
          <Text style={styles.title}>Order</Text>
          <OrderList width={24} height={24} />
        </View>
        <TouchableOpacity style={styles.iconText} onPress={redirectToCancelOrderPage}>
          <Text style={styles.cancelOrderText}>Cancelled orders</Text>
          <Cancel width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View>
        <Input
          placeholder='Search Order'
          placeholderTextColor={Colors.light.inputBorderColor}
          style={styles.inputStyle}
          containerStyles={styles.inputContainer}
          isNumeric
        />
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.order_number}
        renderItem={({ item }) => <OrderInformation order={item} />}
      />
    </ScrollView>
  );
};

export default Order;
