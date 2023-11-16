import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toggle from '../../shared/toggleSwitch';
import { RecentOrderProps } from './types';

import { getStyles } from './styles';

export const RecentOrders = ({ item }: RecentOrderProps): JSX.Element => {
  const navigation: any = useNavigation();
  const styles = getStyles();
  const [isToggleEnabled, setIsToggleEnabled] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsToggleEnabled(!isToggleEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerPart}>
        <Text style={styles.text}>
          Order # <Text style={styles.pinkText}>Zeepup{item.order}</Text>
        </Text>
        <Toggle enable={isToggleEnabled} setEnable={handleToggle} />
      </View>
      <View style={styles.orderContainer}>
        <Text style={styles.text}>Order date</Text>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>Collected: No</Text>
      </View>
      <View style={styles.orderContainer}>
        <Text style={styles.text}>Order placed</Text>
        <Text style={styles.text}>Collection time: </Text>
        <View />
      </View>
      <View style={styles.orderContainer}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Phone number</Text>
        <View />
      </View>
      <Text style={styles.cancelText}>Cancel</Text>
    </View>
  );
};
