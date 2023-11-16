import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ModalWrapper } from '../../shared/centerModal';
import { CollectionOrderProps } from './types';
import Close from '../../../assets/images/icons/closePink.svg';

import { getStyles } from './styles';

const CollectionOrderModal = ({
  openModal,
  setOpenModal,
  orderDetails,
}: CollectionOrderProps): JSX.Element => {
  const styles = getStyles();

  const renderVendorDetails = (): JSX.Element => (
    <View style={styles.aboutBuyer}>
      <Text style={styles.buyerTitle}>Vendor</Text>
      <Text style={styles.smallText}>
        Name <Text style={styles.lightText}>{orderDetails.vendor.name}</Text>
      </Text>
      <Text style={styles.smallText}>
        Phone <Text style={styles.lightText}>{orderDetails.vendor.phone}</Text>
      </Text>
      <Text style={styles.smallText}>
        Address <Text style={styles.lightText}>{orderDetails.vendor.address}</Text>
      </Text>
      <Text style={styles.smallText}>
        Zipcode <Text style={styles.lightText}>{orderDetails.vendor.zipcode}</Text>
      </Text>
      <Text style={styles.smallText}>
        State <Text style={styles.lightText}>{orderDetails.vendor.state}</Text>
      </Text>
      <Text style={styles.smallText}>
        City <Text style={styles.lightText}>{orderDetails.vendor.city}</Text>
      </Text>
      <Text style={styles.smallText}>
        Collection Time{' '}
        <Text style={[styles.lightText, styles.pinkText]}>
          {orderDetails.order.delivery_date + ' ' + orderDetails.order.delivery_time}
        </Text>
      </Text>
    </View>
  );

  const renderOrderDetails = (): JSX.Element => (
    <View style={styles.aboutBuyer}>
      <Text style={styles.buyerTitle}>Order collected by</Text>
      <Text style={styles.smallText}>
        Name <Text style={styles.lightText}>{orderDetails.order.name}</Text>
      </Text>
      <Text style={styles.smallText}>
        Phone <Text style={styles.lightText}>{orderDetails.order.phone}</Text>
      </Text>
      <Text style={styles.smallText}>
        Address <Text style={styles.lightText}>{orderDetails.order.address}</Text>
      </Text>
      <Text style={styles.smallText}>
        Zipcode <Text style={styles.lightText}>{orderDetails.order.zipcode}</Text>
      </Text>
      <Text style={styles.smallText}>
        State <Text style={styles.lightText}>{orderDetails.order.state}</Text>
      </Text>
      <Text style={styles.smallText}>
        City <Text style={styles.lightText}>{orderDetails.order.city}</Text>
      </Text>
      <Text style={styles.smallText}>
        Collected{' '}
        <Text style={[styles.lightText, styles.pinkText]}>{orderDetails.order.collected}</Text>
      </Text>
    </View>
  );

  return (
    <ModalWrapper modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.container}>
        <View style={styles.headerPart}>
          <Text style={styles.title}>
            Order Number: <Text style={styles.pinkText}>{orderDetails.order.order_number}</Text>
          </Text>
          <TouchableOpacity style={styles.closeContainer} onPress={() => setOpenModal(false)}>
            <Close width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            {renderVendorDetails()}
            {renderOrderDetails()}
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.buyerTitle}>Items</Text>
        <View style={styles.bottomInfo}>
          <View>
            <Text style={styles.smallText}>Item</Text>
          </View>
          <View>
            <Text style={styles.smallText}>Unit Price</Text>
          </View>
          <View>
            <Text style={styles.smallText}>Quantity</Text>
          </View>
          <View>
            <Text style={styles.smallText}>Price</Text>
          </View>
        </View>
        {orderDetails.items.map((item, index) => (
          <View key={index} style={styles.bottomInfo}>
            <View>
              <Text style={[styles.smallText, styles.lightText, styles.bottomValueText]}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={[styles.smallText, styles.lightText, styles.bottomValueText]}>
                {item.unit_price}
              </Text>
            </View>
            <View>
              <Text style={[styles.smallText, styles.lightText, styles.bottomValueText]}>
                {item.quantity}
              </Text>
            </View>
            <View>
              <Text style={[styles.smallText, styles.lightText, styles.bottomValueText]}>
                ${item.total_price}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ModalWrapper>
  );
};

export default CollectionOrderModal;
