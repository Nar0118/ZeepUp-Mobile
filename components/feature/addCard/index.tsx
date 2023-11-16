import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import Input from '../../shared/inputWithLabel';
import { DropdownMenu } from '../../shared/dropDown';
import Button from '../../shared/button';
import { IFormCard, monthData, yearData } from './types';
import Cards from '../../../assets/images/icons/paymentCards.svg';
import { PaymentCardService } from '../../../services/paymentCard.service';
import { ToastEnum } from '../../../enums/toast.enum';
import { ISuccessResponse } from '../../../interfaces/successResponse.interface';
import { IErrorResponse } from '../../../interfaces/responseError.interface';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

const initialValue: IFormCard = {
  name_on_card: '',
  card_number: '',
  cvv: '',
  card_type: '',
  card_expiry_month: '',
  card_expiry_year: '',
};

const AddCard = (): JSX.Element => {
  const paymentCardService = new PaymentCardService();
  const styles = getStyles();
  const toast = useToast();

  const [form, setForm] = useState<IFormCard>(initialValue);

  const [errorMessage, setErrorMessage] = useState<IFormCard>(initialValue);

  const handleChange =
    (field: string) =>
    (value: string): void => {
      setForm((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    };

  const handleSave = async (): Promise<void> => {
    setErrorMessage(initialValue);
    if (!form.card_type) {
      setErrorMessage((prevState) => ({
        ...prevState,
        card_type: 'Card Type is required',
      }));
      return;
    }
    if (!form.name_on_card) {
      setErrorMessage((prevState) => ({
        ...prevState,
        name_on_card: 'Name on Card is required',
      }));
      return;
    }
    if (!form.card_number) {
      setErrorMessage((prevState) => ({
        ...prevState,
        card_number: 'Card Number is required',
      }));
      return;
    }
    if (!form.card_expiry_month) {
      setErrorMessage((prevState) => ({
        ...prevState,
        card_expiry_month: 'Card Expiry Month is required',
      }));
      return;
    }
    if (!form.card_expiry_year) {
      setErrorMessage((prevState) => ({
        ...prevState,
        card_expiry_year: 'Card Expiry Year is required',
      }));
      return;
    }
    if (!form.cvv) {
      setErrorMessage((prevState) => ({
        ...prevState,
        cvv: 'CVV is required',
      }));
      return;
    }

    const data = await paymentCardService.addPaymentCard(form);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    if (data && (data as ISuccessResponse).success) {
      toast.show((data as ISuccessResponse).message, {
        type: ToastEnum.SUCCESS,
      });
      setForm(initialValue);
    } else {
      Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
        setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.inputs}>
        <Input
          placeholder='VISA/MasterCard/American Express'
          placeholderTextColor={Colors.light.inputBorderColor}
          label='Card Type'
          style={styles.inputStyle}
          containerStyles={styles.inputContainer}
          value={form.card_type}
          onChangeText={handleChange('card_type')}
        />
        {errorMessage.card_type && (
          <Text style={styles.errorMessage}>{errorMessage.card_type}</Text>
        )}
      </View>
      <View style={styles.inputs}>
        <Input
          placeholder='John Doe'
          placeholderTextColor={Colors.light.inputBorderColor}
          label='Name on Card'
          style={styles.inputStyle}
          containerStyles={styles.inputContainer}
          isNumeric
          value={form.name_on_card}
          onChangeText={handleChange('name_on_card')}
        />
        {errorMessage.name_on_card && (
          <Text style={styles.errorMessage}>{errorMessage.name_on_card}</Text>
        )}
      </View>
      <View style={styles.inputs}>
        <Input
          icon={<Cards width={80} height={15} />}
          placeholder='1234 0000 0000 0000'
          placeholderTextColor={Colors.light.inputBorderColor}
          label='Card Number'
          style={styles.inputStyle}
          containerStyles={styles.inputContainer}
          isNumeric
          value={form.card_number}
          onChangeText={handleChange('card_number')}
        />
        {errorMessage.card_number && (
          <Text style={styles.errorMessage}>{errorMessage.card_number}</Text>
        )}
      </View>
      <View style={styles.dropdownContainer}>
        <View>
          <Text style={styles.label}>Expiry Month</Text>
          <View>
            <DropdownMenu
              item={monthData}
              dropdownStyle={styles.dropdown}
              onChange={handleChange('card_expiry_month')}
              placeholderText='mm'
              value={form.card_expiry_month}
            />
          </View>
          {errorMessage.card_expiry_month && (
            <Text style={styles.errorMessage}>{errorMessage.card_expiry_month}</Text>
          )}
        </View>
        <View>
          <Text style={styles.label}>Expiry Year</Text>
          <View>
            <DropdownMenu
              item={yearData}
              dropdownStyle={styles.dropdown}
              onChange={handleChange('card_expiry_year')}
              value={form.card_expiry_year}
              placeholderText='yyyy'
            />
          </View>
          {errorMessage.card_expiry_year && (
            <Text style={styles.errorMessage}>{errorMessage.card_expiry_year}</Text>
          )}
        </View>
        <View style={styles.inputs}>
          <Text style={styles.label}>CVV</Text>
          <Input
            placeholder='123'
            placeholderTextColor={Colors.light.inputBorderColor}
            style={styles.inputStyleCvv}
            containerStyles={styles.inputContainerCvv}
            isNumeric
            value={form.cvv}
            onChangeText={handleChange('cvv')}
          />
          {errorMessage.cvv && <Text style={styles.errorMessage}>{errorMessage.cvv}</Text>}
        </View>
      </View>
      <View style={styles.buttonContainerBottom}>
        <Button
          title='Save'
          onPress={handleSave}
          width={90}
          height={30}
          fontSize={12}
          backgroundColor={Colors.light.defaultYellow}
          textColor={Colors.light.white}
        />
      </View>
    </ScrollView>
  );
};

export default AddCard;
