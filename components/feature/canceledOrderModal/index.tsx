import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ModalWrapper } from '../../shared/centerModal';
import { CanceledOrderProps } from './types';
import Close from '../../../assets/images/icons/closePink.svg';

import { getStyles } from './styles';

const CanceledOrderModal = ({
  openModal,
  setOpenModal,
  order,
  cancelModalMessage,
}: CanceledOrderProps): JSX.Element => {
  const styles = getStyles();

  return (
    <ModalWrapper modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeContainer} onPress={() => setOpenModal(false)}>
          <Close width={25} height={25} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../../assets/images/images/cancel.png')}
            resizeMode='contain'
            style={styles.image}
          />
          <Text style={styles.title}>Order Cancelled!</Text>
          <Text style={styles.orderNumber}>
            Order Number : <Text style={styles.pinkText}>{order.order_number}</Text>
          </Text>
          <Text style={styles.description}>{cancelModalMessage}</Text>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default CanceledOrderModal;
