import React, { useState } from 'react';
import { View, Text } from 'react-native';
import useAsyncEffect from 'use-async-effect';
import { ScrollView } from 'react-native-gesture-handler';
import { CardCategory } from '../../../screens/payments/types';
import MasterCard from '../../../assets/images/icons/masterCard.svg';
import Visa from '../../../assets/images/icons/visaCard.svg';
import AmericanExpress from '../../../assets/images/icons/americanExpress.svg';
import { IPaymentCard } from '../../../interfaces/paymentCard.interface';
import { ApiError } from '../../../services/ApiBase';
import { PaymentCardService } from '../../../services/paymentCard.service';

import { getStyles } from './styles';

const ManageCard = (): JSX.Element => {
  const styles = getStyles();
  const paymentCardService = new PaymentCardService();

  const [paymentCards, setPaymentCards] = useState<Array<IPaymentCard>>([]);

  const getPaymentCards = async (): Promise<void> => {
    const data: Array<IPaymentCard> | ApiError = await paymentCardService.getPaymentCards();

    if ('errorMessage' in data) {
      return;
    }

    setPaymentCards(data as Array<IPaymentCard>);
  };

  useAsyncEffect(async () => {
    await getPaymentCards();
  }, []);

  return (
    <ScrollView>
      {paymentCards.map((data) => (
        <View key={data.id} style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Name on Card:<Text style={styles.textValue}> {data.name_on_card}</Text>
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Card Number:<Text style={styles.textValue}> {data.card_number}</Text>
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.cardType}>
              <Text style={styles.text}>Card Type:</Text>
              {data.card_type === CardCategory.MASTERCARD ? (
                <MasterCard width={20} height={20} />
              ) : data.card_type === CardCategory.VISA ? (
                <Visa width={20} height={20} />
              ) : (
                <AmericanExpress width={20} height={20} />
              )}
            </View>
          </View>
          <Text style={styles.text}>
            Expiration Date:<Text style={styles.textValue}> {data.expiration_date}</Text>
          </Text>
          <View style={styles.line} />
          <Text style={styles.text}>
            Status:<Text style={styles.textValue}> {data.status ? 'Active' : 'Inactive'}</Text>
          </Text>
          <View style={styles.line} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Created at:<Text style={styles.textValue}> {data.created_at}</Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ManageCard;
