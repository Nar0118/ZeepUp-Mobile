import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import ButtonWithIcon from '../../shared/buttonIcon';
import { OrderInformationProps } from './types';
import CanceledOrderModal from '../canceledOrderModal';
import CollectionOrderModal from '../collectionOrder';
import ArrowRight from '../../../assets/images/icons/profilePage/arrowRight.svg';
import ArrowDown from '../../../assets/images/icons/arrowDown.svg';
import Close from '../../../assets/images/icons/closeWhite.svg';
import { OrdersService } from '../../../services/orders.service';
import { ISuccessResponse } from '../../../interfaces/successResponse.interface';
import { ApiError } from '../../../services/ApiBase';
import { ToastEnum } from '../../../enums/toast.enum';
import { env } from '../../../constants/env';
import { checkLink } from '../../../utils/checkLink';
import { IOrderDetails } from '../../../interfaces/orders.interface';

import { getStyles } from './styles';

const OrderInformation = ({ order }: OrderInformationProps): JSX.Element => {
  const ordersService = new OrdersService();
  const styles = getStyles();
  const toast = useToast();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenCollectionModal, setIsOpenCollectionModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [cancelModalMessage, setCancelModalMessage] = useState<string>('');
  const [orderDetails, setOrderDetails] = useState<IOrderDetails | null>(null);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleToggleModal = (orderNumber: string) => async (): Promise<void> => {
    const data: ISuccessResponse | ApiError = await ordersService.cancelOrder(orderNumber);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
        placement: 'bottom',
      });
      return;
    }

    if ('success' in data && data.success) {
      setCancelModalMessage(data.message);
      setOpenModal(!openModal);
    }
  };

  const handleToggleCollectionModal = async (orderNumber: string): Promise<void> => {
    const details: IOrderDetails | ApiError = await ordersService.getOrderDetails(orderNumber);

    if ('errorMessage' in details) {
      toast.show(`${details.errorMessage}`, {
        type: ToastEnum.ERROR,
        placement: 'bottom',
      });

      return;
    }

    setOrderDetails(details as IOrderDetails);
    setIsOpenCollectionModal(!isOpenCollectionModal);
  };

  return (
    <View style={[styles.container, isOpen && styles.boxContainer]}>
      <TouchableOpacity onPress={handleToggle}>
        <View style={styles.orderItemHeader}>
          <View style={styles.arrowTitle}>
            {!isOpen ? <ArrowRight width={18} height={18} /> : <ArrowDown width={18} height={18} />}
            <Text style={styles.text}>Order ID</Text>
          </View>
          <Text
            style={[styles.orderNumber, isOpen && styles.pinkText]}
            onPress={() => handleToggleCollectionModal(order.order_number)}
          >
            {order.order_number}
          </Text>
          {isOpen ? (
            <View>
              <Image
                source={{
                  uri: checkLink(order.vendorImage)
                    ? order.vendorImage
                    : env.BASE_API_URL + order.vendorImage,
                }}
                style={styles.image}
              />
              <View style={styles.imageBottomText}>
                <Text>Collected:</Text>
                <Text>Options : </Text>
              </View>
            </View>
          ) : (
            <Text style={[styles.orderStatusText, order.status === 'no' && styles.greenColorText]}>
              {order.status}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {isOpen && (
        <>
          <View style={styles.orderItemDetails}>
            <Text style={styles.text}>
              Customer name:<Text style={styles.valueText}> {order.vendorName}</Text>
            </Text>
            <View style={styles.line} />
            <Text style={styles.text}>
              Collection Time:
              <Text style={styles.valueText}>
                {' '}
                {order.delivery_date + ' ' + order.delivery_time}
              </Text>
            </Text>
            <View style={styles.line} />
            <Text style={styles.text}>
              Payment Method:<Text style={styles.valueText}> {order.payment_type}</Text>
            </Text>
            <Text style={styles.text}>
              Order Time:<Text style={styles.valueText}> {order.creditCardTime}</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>
              Total:<Text style={styles.valueText}> ${order.total}</Text>
            </Text>
            <ButtonWithIcon
              title='Cancel'
              onPress={handleToggleModal(order.order_number)}
              icon={<Close width={15} height={15} />}
              containerStyles={styles.saveButton}
              textStyle={styles.buttonText}
            />
          </View>
        </>
      )}
      <CanceledOrderModal
        cancelModalMessage={cancelModalMessage}
        order={order}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {orderDetails && (
        <CollectionOrderModal
          orderDetails={orderDetails}
          openModal={isOpenCollectionModal}
          setOpenModal={setIsOpenCollectionModal}
        />
      )}
    </View>
  );
};

export default OrderInformation;
