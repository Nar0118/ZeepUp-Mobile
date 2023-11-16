import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/shared/inputWithLabel';
import { VendorCard } from '../../components/feature/vendorCard';
import { OrderHistoryType, fakeData } from './types';
import History from '../../assets/images/icons/orderHistory.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const VendorNotifications = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Notifications</Text>
            <History width={24} height={24} />
          </View>
          <Input
            placeholder='Search Order'
            placeholderTextColor={Colors.light.inputBorderColor}
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
          />
        </View>
        <View style={styles.itemsContainer}>
          {fakeData.map((item: OrderHistoryType, index: number) => (
            <VendorCard
              item={item}
              isButton={false}
              status
              checkbox
              vendor={false}
              refundStatus={false}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VendorNotifications;
