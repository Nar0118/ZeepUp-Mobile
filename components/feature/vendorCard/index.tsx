import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toggle from '../../shared/toggleSwitch';
import Button from '../../shared/button';
import { VendorCardProps } from './types';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

export const VendorCard = ({
  item,
  isButton,
  status,
  checkbox,
  vendor,
  refundStatus,
}: VendorCardProps): JSX.Element => {
  const navigation: any = useNavigation();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ORDER ID: <Text style={styles.valueText}>{item.orderId}</Text>
      </Text>
      <Text style={styles.text}>
        Payment Type: <Text style={styles.valueText}>{item.paymentType}</Text>
      </Text>
      <View style={styles.line} />
      <Text style={styles.text}>
        Buyer Name: <Text style={styles.valueText}>{item.buyerName}</Text>
      </Text>
      <View style={styles.line} />
      {vendor ? (
        <>
          <Text style={styles.text}>
            Vendor Name: <Text style={styles.valueText}>Vendor</Text>
          </Text>
          <Text style={styles.text}>
            Vendor state: <Text style={styles.valueText}>State</Text>
          </Text>
        </>
      ) : (
        <Text style={styles.text}>
          Item name: <Text style={styles.valueText}>{item.itemName}</Text>
        </Text>
      )}
      <View style={[styles.line, styles.bigLine]} />
      <View style={styles.toggleContainer}>
        <View>
          <Text style={styles.text}>
            Order Date: <Text style={styles.valueText}>{item.orderDate}</Text>
          </Text>
          <Text style={styles.text}>
            Status: <Text style={styles.valueText}>{item.status}</Text>
          </Text>
          <Text style={styles.text}>
            Date and Time: <Text style={styles.valueText}>{item.dateAndTime}</Text>
          </Text>
        </View>
        {checkbox && <Toggle enable={true} setEnable={() => {}} />}
      </View>
      {status && (
        <View style={styles.bottomContainer}>
          <Text style={styles.itemText}>3 hours after</Text>
          <Text style={[styles.itemText, styles.greenText]}>Already Collected</Text>
        </View>
      )}
      <View style={styles.line} />
      <View style={styles.bottomInfoContainer}>
        <View>
          <Text style={styles.text}>
            Sales Tax: <Text style={styles.valueText}>{item.tax}</Text>
          </Text>
          <Text style={styles.text}>
            Total: <Text style={styles.valueText}>{item.total}</Text>
          </Text>
        </View>
        {refundStatus && (
          <View>
            <Text style={styles.text}>
              Cancelled by: <Text style={styles.valueText}>User</Text>
            </Text>
            <Text style={styles.text}>
              Refund amount: <Text style={styles.valueText}>Amount</Text>
            </Text>
          </View>
        )}
      </View>
      {refundStatus && (
        <Text style={styles.textCenter}>
          Refund Status: <Text style={[styles.text, styles.greenText]}>Status</Text>
        </Text>
      )}
      {isButton && (
        <View style={styles.buttonContainerBottom}>
          <Button
            title='Receipt'
            onPress={() => {}}
            width={90}
            height={30}
            fontSize={12}
            backgroundColor={Colors.light.defaultYellow}
            textColor={Colors.light.white}
          />
        </View>
      )}
    </View>
  );
};
