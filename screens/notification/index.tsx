import React from 'react';
import { Text, View } from 'react-native';

import { getStyles } from './styles';

const Notification = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
      <Text style={styles.description}>Order confirmation</Text>
      <Text style={styles.orderNumber}>
        Your order number is <Text style={styles.pinkText}>Zeepup0305</Text>
      </Text>
    </View>
  );
};

export default Notification;
