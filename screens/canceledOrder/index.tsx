import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import useAsyncEffect from 'use-async-effect';
import Input from '../../components/shared/inputWithLabel';
import OrderInformation from '../../components/feature/orderInforamation';
import { canceledOrdersData } from '../order/types';
import OrderList from '../../assets/images/icons/order.svg';
import { OrdersService } from '../../services/orders.service';
import { IOrders } from '../../interfaces/orders.interface';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const CanceledOrder = (): JSX.Element => {
  const styles = getStyles();
  const ordersService = new OrdersService();

  const [orders, setOrders] = useState<Array<IOrders>>([]);

  const getCancelledOrders = async (): Promise<void> => {
    const data = await ordersService.getCancelledOrders();

    if ('errorMessage' in data) {
      return;
    }

    setOrders(data as Array<IOrders>);
  };

  useAsyncEffect(async () => {
    await getCancelledOrders();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.iconText}>
          <Text style={styles.title}>My Cancelled orders</Text>
          <OrderList width={24} height={24} />
        </View>
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
      <View style={styles.itemsContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.order_number}
          renderItem={({ item }) => <OrderInformation order={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default CanceledOrder;
