import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Platform,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Business from '../../../assets/images/icons/addBusinessDark.svg';
import BusinessHouse from '../../../assets/images/icons/businessHouse.svg';
import Pencil from '../../../assets/images/icons/pencil.svg';
import Hashtag from '../../../assets/images/icons/hashtag.svg';
import EyeOff from '../../../assets/images/icons/eyeOff.svg';
import Mail from '../../../assets/images/icons/mail.svg';
import User from '../../../assets/images/icons/user.svg';
import Phone from '../../../assets/images/icons/phone.svg';
import Portrait from '../../../assets/images/icons/portrait.svg';
import City from '../../../assets/images/icons/city.svg';
import Colors from '../../../constants/Colors';
import { ToastEnum } from '../../../enums/toast.enum';
import { IRegisterVendorBusinessForm } from '../../../interfaces/registerForm.interface';
import { IErrorResponse } from '../../../interfaces/responseError.interface';
import { IImage } from '../../../interfaces/image.interface';
import { Routes } from '../../../navigation/routes';
import { DropdownMenu } from '../../shared/dropDown';
import ButtonWithIcon from '../../shared/buttonIcon';
import Input from '../../shared/inputWithLabel';
import { AuthService } from '../../../services/auth.service';
import { ApiError } from '../../../services/ApiBase';
import { PlatformOS } from '../../../utils/platform';
import { Links } from '../../../utils/links';
import { ISuccessResponse } from '../../../interfaces/successResponse.interface';

import { getStyles } from './styles';

const VendorBusiness = (): JSX.Element => {
  const toast = useToast();

  const authService = new AuthService();

  const [form, setForm] = useState<IRegisterVendorBusinessForm>({
    name: '',
    business_description: '',
    address: '',
    street_number: '',
    state: '',
    city: '',
    zipcode: '',
    country: 'US',
    profileImage: '',
    bannerImage: '',
    email: '',
    phone: '',
    manager_name: '',
    password: '',
    password_confirmation: '',
    checkbox: false,
  });

  const styles = getStyles();
  const navigation: any = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const fakeData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

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

      setForm((prevState) => ({
        ...prevState,
        [field]: imageData,
      }));
    }
  };

  const handleOnChange =
    (field: string) =>
    (value: string): void => {
      setForm((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    };

  const handleAddBusiness = async (): Promise<void> => {
    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('manager_name', form.manager_name);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('password_confirmation', form.password_confirmation);
    formData.append('phone', form.phone);
    formData.append('termsandconditions', form.checkbox ? 'yes' : 'no');
    formData.append('country', form.country);
    formData.append('state', form.state);
    formData.append('city', form.city);
    formData.append('zipcode', form.zipcode);
    formData.append('business_description', form.business_description);
    formData.append('address', form.address);
    formData.append('street_number', form.street_number);
    formData.append('profile_photo_path', form.profileImage as string);
    formData.append('banner_photo_path', form.bannerImage as string);

    const data: ISuccessResponse | ApiError = await authService.registerVendor(formData);

    if (data && (data as ISuccessResponse).success) {
      toast.show((data as ISuccessResponse).message, {
        type: ToastEnum.SUCCESS,
      });
      navigation.navigate(Routes.VENDOR_LOGIN);
    } else {
      Object.values((data as IErrorResponse).data).forEach((item) => {
        toast.show(item[0], {
          type: ToastEnum.ERROR,
        });
      });
    }
    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Restaurant</Text>
          <Business width={24} height={24} />
        </View>
        <View style={styles.inputMainContainer}>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Enter restaurant name'
              icon={<BusinessHouse width={17} height={17} />}
              value={form.name}
              onChangeText={handleOnChange('name')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.bigInputStyle}
              containerStyles={styles.inputContainer}
              label='Restaurant description'
              icon={<Pencil width={20} height={20} />}
              value={form.business_description}
              onChangeText={handleOnChange('business_description')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.bigInputStyle}
              containerStyles={styles.inputContainer}
              label='Restaurant Street Address'
              icon={<Pencil width={20} height={20} />}
              value={form.address}
              onChangeText={handleOnChange('address')}
            />
          </View>
          <View style={styles.twoItemsContainer}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.smallInputContainer}
              label='Street Number'
              icon={<Hashtag width={20} height={20} />}
              value={form.street_number}
              onChangeText={handleOnChange('street_number')}
            />
            <View>
              <Text style={styles.label}>State</Text>
              <View style={{ width: screenWidth - 170 }}>
                <DropdownMenu
                  item={fakeData}
                  dropdownStyle={styles.dropdown}
                  onChange={handleOnChange('state')}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='City'
              icon={<City width={20} height={20} />}
              value={form.city}
              onChangeText={handleOnChange('city')}
            />
          </View>
          <View style={styles.twoItemsContainer}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.smallInputContainer}
              label='Zipcode'
              icon={<Hashtag width={25} height={20} />}
              value={form.zipcode}
              onChangeText={handleOnChange('zipcode')}
            />
            <View>
              <Text style={styles.label}>Country</Text>
              <View style={styles.countryInput}>
                <Image
                  source={require('../../../assets/images/usaLogo.png')}
                  width={40}
                  height={25}
                />
                <Text style={styles.countryTitle}>United States</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputs}>
            <View>
              <Text style={styles.label}>Logo (optional)</Text>
              <TouchableOpacity style={styles.imageInput} onPress={pickImage('profileImage')}>
                <Portrait width={16} height={16} />
                <Text style={styles.placeholder}>Click to upload</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputs}>
            <View>
              <Text style={styles.label}>Banner Image (optional)</Text>
              <TouchableOpacity style={styles.imageInput} onPress={pickImage('bannerImage')}>
                <Portrait width={16} height={16} />
                <Text style={styles.placeholder}>Click to upload</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Restaurant Email'
              icon={<Mail width={20} height={20} />}
              value={form.email}
              onChangeText={handleOnChange('email')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Restaurant Phone'
              icon={<Phone width={20} height={20} />}
              value={form.phone}
              onChangeText={handleOnChange('phone')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Contact name'
              icon={<User width={20} height={20} />}
              value={form.manager_name}
              onChangeText={handleOnChange('manager_name')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Password'
              icon={<EyeOff width={20} height={20} />}
              value={form.password}
              onChangeText={handleOnChange('password')}
            />
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              label='Confirm Password'
              icon={<EyeOff width={20} height={20} />}
              value={form.password_confirmation}
              onChangeText={handleOnChange('password_confirmation')}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              size={25}
              containerStyle={{
                margin: 0,
                padding: 0,
              }}
              checkedColor={Colors.light.defaultYellow}
              checked={form.checkbox}
              onPress={() => {
                setForm((prevState) => ({
                  ...prevState,
                  checkbox: !prevState.checkbox,
                }));
              }}
            />
            <Text style={styles.checkboxText}>
              By clicking here, I state that I have read and agreed to ZeepUp's
              <Text
                style={styles.blueText}
                onPress={() => Linking.openURL(Links.TERMS_CONDITIONS_EN)}
              >
                {' '}
                Terms & Conditions{' '}
              </Text>
              and
              <Text
                style={styles.blueText}
                onPress={() => Linking.openURL(Links.PRIVACY_POLICY_EN)}
              >
                {' '}
                Privacy Policy
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonWithIcon
              title='Save changes'
              onPress={() => {}}
              containerStyles={styles.saveButton}
              textStyle={styles.buttonText}
            />
            <ButtonWithIcon
              title='Submit'
              onPress={handleAddBusiness}
              containerStyles={styles.submitButton}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default VendorBusiness;
