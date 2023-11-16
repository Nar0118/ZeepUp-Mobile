import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';
import { ToastEnum } from '../../../enums/toast.enum';
import { IErrorResponse } from '../../../interfaces/responseError.interface';
import { IRegisterFrom } from '../../../interfaces/registerForm.interface';
import { Routes } from '../../../navigation/routes';
import Button from '../../shared/button';
import IconInput from '../../shared/input';
import { DropdownMenu } from '../../shared/dropDown';
import { AuthService } from '../../../services/auth.service';
import PhoneNumberInput from '../../shared/phoneNumberInput';
import { ApiError } from '../../../services/ApiBase';
import { Links } from '../../../utils/links';
import { PlatformOS } from '../../../utils/platform';
import { TransformedCityData } from './types';
import states from '../../../utils/statesData';
import { citiesStates } from '../../../utils/cities';
import User from '../../../assets/images/icons/user.svg';
import Mail from '../../../assets/images/icons/mail.svg';
import Phone from '../../../assets/images/icons/phone.svg';
import Country from '../../../assets/images/icons/location.svg';
import Home from '../../../assets/images/icons/home.svg';
import City from '../../../assets/images/icons/city.svg';
import Hashtag from '../../../assets/images/icons/hashtagGray.svg';
import PasswordKeyboard from '../../../assets/images/icons/passwordKeyboard.svg';
import { ISuccessResponse } from '../../../interfaces/successResponse.interface';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

const Signup = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const [cityData, setCityData] = useState<{ label: string; value: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState<{
    name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
  }>({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });

  const toast = useToast();
  const authService = new AuthService();

  const [form, setForm] = useState<IRegisterFrom>({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    password: '',
    password_confirmation: '',
    checkbox: false,
  });

  const usCountry = [{ label: 'United States', value: 'US' }];

  const transformedData: Array<TransformedCityData> = [];

  for (const stateName in citiesStates) {
    const cities = citiesStates[stateName];

    for (const cityName of cities) {
      const cityObject = {
        label: cityName,
        value: cityName,
        stateName: stateName,
      };
      transformedData.push(cityObject);
    }
  }

  const setCityDataByState = (state: string): void => {
    const filteredCityData = transformedData.filter((city) => city.stateName === state);
    setCityData(filteredCityData);
  };

  useEffect(() => {
    setCityDataByState(form.state);
  }, [form.state]);

  const handleOnChange =
    (field: string) =>
    (value: string): void => {
      setForm((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    };

  const register = async (): Promise<void> => {
    const body = { ...form, termsandconditions: form.checkbox ? 'yes' : 'no' };

    const data: ISuccessResponse | ApiError = await authService.register(body);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });
      return;
    }
    if (data && (data as ISuccessResponse).success) {
      await AsyncStorage.setItem('userEmail', form.email);
      toast.show((data as ISuccessResponse).message, {
        type: ToastEnum.SUCCESS,
      });

      navigation.navigate(Routes.EMAIL_VERIFY);
    } else {
      Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
        setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='padding'
        enabled={Platform.OS === PlatformOS.IOS}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text style={styles.title}>JOIN US!</Text>
            <Image
              source={require('../../../assets/images/images/sketchFace.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.description}>Create a new account</Text>

          <ScrollView>
            <View style={styles.inputMainContainer}>
              <View>
                {errorMessage.name && <Text style={styles.errorMessage}>{errorMessage.name}</Text>}
                <IconInput
                  icon={<User width={18} height={18} />}
                  placeholder='Name'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  value={form.name}
                  onChangeText={handleOnChange('name')}
                />
              </View>
              <View>
                {errorMessage.email && (
                  <Text style={styles.errorMessage}>{errorMessage.email}</Text>
                )}
                <IconInput
                  icon={<Mail width={18} height={18} />}
                  placeholder='Email'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  value={form.email}
                  onChangeText={handleOnChange('email')}
                />
              </View>
              <View>
                {errorMessage.phone && (
                  <Text style={styles.errorMessage}>{errorMessage.phone}</Text>
                )}
                <PhoneNumberInput
                  icon={<Phone width={18} height={18} />}
                  placeholder='Phone'
                  style={styles.inputStyle}
                  containerStyles={[styles.inputContainer, styles.phoneContainer]}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  isPhone
                  value={form.phone}
                  onChangeText={handleOnChange('phone')}
                />
              </View>
              <DropdownMenu
                item={usCountry}
                placeholderText='Country'
                icon={<Country width={18} height={18} />}
                onChange={handleOnChange('country')}
              />
              <DropdownMenu
                disabled={!form.country}
                item={states}
                placeholderText='State'
                icon={<Home width={18} height={18} />}
                onChange={handleOnChange('state')}
              />
              <DropdownMenu
                disabled={!form.state}
                item={cityData}
                placeholderText='City'
                icon={<City width={18} height={18} />}
                onChange={handleOnChange('city')}
              />
              <View>
                <IconInput
                  icon={<Hashtag width={18} height={18} />}
                  placeholder='Zip'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  isNumeric
                  value={form.zip}
                  onChangeText={handleOnChange('zip')}
                />
              </View>
              <View>
                {errorMessage.password && (
                  <Text style={styles.errorMessage}>{errorMessage.password}</Text>
                )}
                <IconInput
                  icon={<PasswordKeyboard width={18} height={18} />}
                  placeholder='Password'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  isPassword
                  value={form.password}
                  onChangeText={handleOnChange('password')}
                />
              </View>
              <View>
                {errorMessage.password_confirmation && (
                  <Text style={styles.errorMessage}>{errorMessage.password_confirmation}</Text>
                )}
                <IconInput
                  icon={<PasswordKeyboard width={18} height={18} />}
                  placeholder='Confirm Password'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  isPassword
                  value={form.password_confirmation}
                  onChangeText={handleOnChange('password_confirmation')}
                />
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  size={25}
                  checked={form.checkbox}
                  onPress={() => {
                    setForm((prevState) => ({
                      ...prevState,
                      checkbox: !prevState.checkbox,
                    }));
                  }}
                  containerStyle={{
                    margin: 0,
                    padding: 0,
                  }}
                  checkedColor={Colors.light.defaultYellow}
                />
                <Text style={styles.checkboxText}>
                  By clicking here, I state that I have read and agreed to ZeepUp's
                  <Text
                    style={styles.yellowText}
                    onPress={() => Linking.openURL(Links.TERMS_CONDITIONS_EN)}
                  >
                    {' '}
                    Terms & Conditions{' '}
                  </Text>
                  and
                  <Text
                    style={styles.yellowText}
                    onPress={() => Linking.openURL(Links.PRIVACY_POLICY_EN)}
                  >
                    {' '}
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Register'
                  onPress={register}
                  width={230}
                  height={55}
                  backgroundColor={Colors.light.defaultYellow}
                  textColor={Colors.light.white}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
