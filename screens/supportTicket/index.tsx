import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useToast } from 'react-native-toast-notifications';
import useAsyncEffect from 'use-async-effect';
import RadioButton from '../../components/shared/radioButton';
import { DropdownMenu } from '../../components/shared/dropDown';
import Input from '../../components/shared/inputWithLabel';
import { IImage } from '../../interfaces/image.interface';
import Button from '../../components/shared/button';
import { PlatformOS } from '../../utils/platform';
import { OptionTypes } from './types';
import Support from '../../assets/images/icons/support.svg';
import File from '../../assets/images/icons/filePink.svg';
import { ISupportTicket } from '../../interfaces/supportTicket.interface';
import { SupportTicketService } from '../../services/supportTicket.service';
import { ApiError } from '../../services/ApiBase';
import { ToastEnum } from '../../enums/toast.enum';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const SupportTicket = (): JSX.Element => {
  const styles = getStyles();
  const toast = useToast();
  const supportTicketService = new SupportTicketService();

  const [supportTicket, setSupportTicket] = useState<ISupportTicket | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [image, setImage] = useState<IImage | string>('');
  const [errorMessage, setErrorMessage] = useState<{
    selectedSort: string;
    selectedOption: string;
    details: string;
  }>({
    selectedSort: '',
    selectedOption: '',
    details: '',
  });

  const getSupportTicket = async (): Promise<void> => {
    const data: ISupportTicket | ApiError = await supportTicketService.getSupportTicket();

    if ('errorMessage' in data) {
      return;
    }

    setSupportTicket(data as ISupportTicket);
  };

  useAsyncEffect(async () => {
    await getSupportTicket();
  }, []);

  const sortOptions: Array<OptionTypes> = [
    { key: 'paymentIssue', text: 'Payment issue' },
    { key: 'reportOrder', text: 'Report an order' },
    { key: 'reportBusinessRestaurant', text: 'Report this business/restaurant' },
    { key: 'other', text: 'Other' },
  ];

  const handleSelect = (key: string): void => {
    setSelectedSort(key);
  };

  const pickImage = (field: string) => async (): Promise<void> => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
    });
    if (!image.canceled) {
      const { uri } = image.assets[0];
      const fileName = uri.split('/').pop();
      const fileType = uri.substring(uri.lastIndexOf('.') + 1);

      const imageData: IImage = {
        name: fileName,
        type: `image/${fileType}`,
        uri: Platform.OS === PlatformOS.IOS ? uri.replace('file://', '') : uri,
      };

      setImage(imageData);
    }
  };

  const ordersItem = useMemo(() => {
    if (supportTicket) {
      return supportTicket.orders.map((item) => ({
        label: item.order_number,
        value: item.order_number,
      }));
    }

    return [];
  }, [supportTicket]);

  const restaurantsItem = useMemo(() => {
    if (supportTicket) {
      return supportTicket.restaurants.map((item) => ({
        label: item.name,
        value: item.id + '-' + item.name,
      }));
    }

    return [];
  }, [supportTicket]);

  const checkValidation = (): boolean => {
    setErrorMessage({
      details: '',
      selectedOption: '',
      selectedSort: '',
    });

    if (!selectedSort) {
      setErrorMessage((prevState) => ({
        ...prevState,
        selectedSort: 'Type of request is required',
      }));
      return false;
    }

    if (!details) {
      setErrorMessage((prevState) => ({
        ...prevState,
        details: 'Details is required',
      }));
      return false;
    }

    if (!selectedOption) {
      setErrorMessage((prevState) => ({
        ...prevState,
        selectedOption: 'Selected Option is required',
      }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!checkValidation()) {
      return;
    }

    const text = sortOptions.find((item) => item.key === selectedSort)?.text;

    const formData = new FormData();
    formData.append('details', details);
    formData.append('selectedoption', selectedOption);
    formData.append('typeofrequest', text as string);
    image && formData.append('image', image as string);

    const data = await supportTicketService.addSupportTicket(formData);

    if ('success' in data && data.success) {
      toast.show(data.message, {
        type: ToastEnum.SUCCESS,
      });
      setDetails('');
      setImage('');
      setSelectedOption('');
      setSelectedSort('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {!supportTicket ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size='large' color={Colors.light.defaultPink} />
        </View>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Support Ticket</Text>
            <Support width={24} height={24} />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.preTitle}>
              Type of request<Text style={styles.requiredIcon}> *</Text>
            </Text>
            {sortOptions.map((option: OptionTypes, index: number) => (
              <View key={index} style={styles.radioItem}>
                <RadioButton
                  selectedSort={selectedSort}
                  option={option}
                  handleSelect={handleSelect}
                />
                <Text style={styles.optionText}>{option.text}</Text>
              </View>
            ))}
            {errorMessage.selectedSort && (
              <Text style={styles.errorMessage}>{errorMessage.selectedSort}</Text>
            )}
          </View>
          <View style={styles.infoItem}>
            {selectedSort === 'paymentIssue' || selectedSort === 'reportOrder' ? (
              <>
                <Text style={styles.preTitle}>
                  Order Number<Text style={styles.requiredIcon}> *</Text>
                </Text>
                <DropdownMenu
                  dropdownStyle={styles.dropdown}
                  item={ordersItem}
                  placeholderText='Select Order'
                  value={selectedOption}
                  onChange={setSelectedOption}
                />
                {errorMessage.selectedOption && (
                  <Text style={styles.errorMessage}>{errorMessage.selectedOption}</Text>
                )}
              </>
            ) : selectedSort === 'reportBusinessRestaurant' ? (
              <>
                <Text style={styles.preTitle}>
                  Restaurants<Text style={styles.requiredIcon}> *</Text>
                </Text>
                <DropdownMenu
                  dropdownStyle={styles.dropdown}
                  item={restaurantsItem}
                  placeholderText='Select Restaurants'
                  value={selectedOption}
                  onChange={setSelectedOption}
                />
                {errorMessage.selectedOption && (
                  <Text style={styles.errorMessage}>{errorMessage.selectedOption}</Text>
                )}
              </>
            ) : null}
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.preTitle}>
              Details<Text style={styles.requiredIcon}> *</Text>
            </Text>
            <Input
              style={styles.bigInputStyle}
              containerStyles={styles.inputContainer}
              value={details}
              onChangeText={setDetails}
            />
            {errorMessage.details && (
              <Text style={styles.errorMessage}>{errorMessage.details}</Text>
            )}
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.preTitle}>Attach File (optional)</Text>
            <View>
              <TouchableOpacity style={styles.imageInput} onPress={pickImage('bannerImage')}>
                <File width={16} height={16} />
                <Text style={styles.placeholder}>Click to upload</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Submit'
              onPress={handleSubmit}
              width={140}
              height={50}
              fontSize={15}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default SupportTicket;
