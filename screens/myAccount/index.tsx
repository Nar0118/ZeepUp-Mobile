import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import IconInput from '../../components/shared/input';
import Input from '../../components/shared/inputWithLabel';
import Button from '../../components/shared/button';
import PhoneNumberInput from '../../components/shared/phoneNumberInput';
import { useUserContext } from '../../contexts/UserContextProvider';
import User from '../../assets/images/icons/userEdit.svg';
import Pencil from '../../assets/images/icons/pencil.svg';
import Phone from '../../assets/images/icons/phone.svg';
import Hashtag from '../../assets/images/icons/hashtagGray.svg';
import EyeOff from '../../assets/images/icons/eyeOff.svg';
import EyeOn from '../../assets/images/icons/eyeOn.svg';
import { UserService } from '../../services/user.service';
import { IUpdateUserData } from '../../interfaces/user.interface';
import { ISuccessResponse } from '../../interfaces/successResponse.interface';
import { ApiError } from '../../services/ApiBase';
import { ToastEnum } from '../../enums/toast.enum';
import { IErrorResponse } from '../../interfaces/responseError.interface';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const MyAccount = (): JSX.Element => {
  const styles = getStyles();
  const toast = useToast();
  const { user, updateUser } = useUserContext();

  const userService = new UserService();

  const [showPassword, setShowPassword] = useState<{
    currentPassword: boolean;
    password: boolean;
    confirmPassword: boolean;
  }>({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [accountData, setAccountData] = useState<IUpdateUserData>({
    current_password: '',
    name: '',
    password: '',
    password_confirmation: '',
    zipcode: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState<{
    name: string;
    phone: string;
    zipcode: string;
    current_password: string;
    password: string;
    password_confirmation: string;
  }>({
    name: '',
    phone: '',
    zipcode: '',
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (user) {
      setAccountData((prevState) => ({
        ...prevState,
        name: user.name,
        phone: user.phone,
        zipcode: user.zipcode,
      }));
    }
  }, [user]);

  const handleChange =
    (field: string) =>
    (value: string): void => {
      setAccountData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    };

  const handleSave = async (): Promise<void> => {
    setIsEdit(true);

    const body: Partial<IUpdateUserData> = {};
    accountData.name && (body.name = accountData.name);
    accountData.phone && (body.phone = accountData.phone);
    accountData.zipcode && (body.zipcode = accountData.zipcode);
    accountData.current_password && (body.current_password = accountData.current_password);
    accountData.password && (body.password = accountData.password);
    accountData.password_confirmation &&
      (body.password_confirmation = accountData.password_confirmation);

    const data: ISuccessResponse | ApiError = await userService.updateUserData(body);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    if ('success' in data && data.success) {
      toast.show(data.message, {
        type: ToastEnum.SUCCESS,
      });
      if (user) {
        updateUser({
          ...user,
          name: accountData.name,
          phone: accountData.phone,
          zipcode: accountData.zipcode,
        });
      }
    } else {
      Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
        setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerPart}>
        <Text style={styles.title}>My Account</Text>
        <User width={28} height={28} />
      </View>
      <Text style={styles.description}>Update your profile information and email address</Text>
      <View style={styles.accountName}>
        <Text style={styles.inputLabel}>Account name</Text>
        <View style={styles.inputIcon}>
          {errorMessage.name && <Text style={styles.errorMessage}>{errorMessage.name}</Text>}
          <IconInput
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
            defaultValue={accountData.name}
            onChangeText={handleChange('name')}
            disabled={isEdit}
          />
          <TouchableOpacity activeOpacity={0.5} onPress={() => setIsEdit(!isEdit)}>
            <Pencil width={28} height={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.inputLabel}>E-mail</Text>
        <Text style={styles.emailText}>{user?.email}</Text>
      </View>
      <View style={styles.inputs}>
        {errorMessage.phone && <Text style={styles.errorMessage}>{errorMessage.phone}</Text>}
        <PhoneNumberInput
          icon={<Phone width={18} height={18} />}
          placeholder='Phone'
          style={styles.bottomInputStyle}
          containerStyles={styles.bottomInputPhoneContainer}
          placeholderTextColor={Colors.light.placeholderGrey}
          isPhone
          value={accountData.phone}
          onChangeText={handleChange('phone')}
        />
      </View>
      <View style={styles.inputs}>
        {errorMessage.zipcode && <Text style={styles.errorMessage}>{errorMessage.zipcode}</Text>}
        <Input
          label='Zipcode'
          icon={<Hashtag width={24} height={24} />}
          style={styles.bottomInputStyle}
          containerStyles={styles.bottomInputContainer}
          value={accountData.zipcode}
          onChangeText={handleChange('zipcode')}
        />
      </View>
      <View style={styles.passwordInputs}>
        {errorMessage.current_password && (
          <Text style={styles.errorMessage}>{errorMessage.current_password}</Text>
        )}
        <Input
          style={styles.bottomInputStyle}
          containerStyles={styles.bottomInputContainer}
          placeholder='Current Password'
          placeholderTextColor={Colors.light.black}
          icon={
            showPassword.currentPassword ? (
              <EyeOn width={24} height={24} />
            ) : (
              <EyeOff width={24} height={24} />
            )
          }
          isPassword={!showPassword.currentPassword}
          onIconPress={() =>
            setShowPassword((prevState) => ({
              ...prevState,
              currentPassword: !prevState.currentPassword,
            }))
          }
          value={accountData.current_password}
          onChangeText={handleChange('current_password')}
        />
      </View>
      <View style={styles.passwordInputs}>
        {errorMessage.password && <Text style={styles.errorMessage}>{errorMessage.password}</Text>}
        <Input
          style={styles.bottomInputStyle}
          containerStyles={styles.bottomInputContainer}
          placeholder='New Password'
          placeholderTextColor={Colors.light.black}
          icon={
            showPassword.password ? (
              <EyeOn width={24} height={24} />
            ) : (
              <EyeOff width={24} height={24} />
            )
          }
          isPassword={!showPassword.password}
          onIconPress={() =>
            setShowPassword((prevState) => ({
              ...prevState,
              password: !prevState.password,
            }))
          }
          value={accountData.password}
          onChangeText={handleChange('password')}
        />
      </View>
      <View style={styles.passwordInputs}>
        {errorMessage.password_confirmation && (
          <Text style={styles.errorMessage}>{errorMessage.password_confirmation}</Text>
        )}

        <Input
          style={styles.bottomInputStyle}
          containerStyles={styles.bottomInputContainer}
          placeholder='Confirm Password'
          placeholderTextColor={Colors.light.black}
          icon={
            showPassword.confirmPassword ? (
              <EyeOn width={24} height={24} />
            ) : (
              <EyeOff width={24} height={24} />
            )
          }
          isPassword={!showPassword.confirmPassword}
          onIconPress={() =>
            setShowPassword((prevState) => ({
              ...prevState,
              confirmPassword: !prevState.confirmPassword,
            }))
          }
          value={accountData.password_confirmation}
          onChangeText={handleChange('password_confirmation')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Save'
          onPress={handleSave}
          width={110}
          height={40}
          fontSize={12}
          backgroundColor={Colors.light.defaultYellow}
          textColor={Colors.light.white}
        />
      </View>
    </ScrollView>
  );
};

export default MyAccount;
