import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import Mail from '../../../assets/images/icons/mail.svg';
import Facebook from '../../../assets/images/icons/facebookLogo.svg';
import Google from '../../../assets/images/icons/googleLogo.svg';
import Colors from '../../../constants/Colors';
import { useUserContext } from '../../../contexts/UserContextProvider';
import { ToastEnum } from '../../../enums/toast.enum';
import { ILoginResponse } from '../../../interfaces/auth.interface';
import { Routes } from '../../../navigation/routes';
import Button from '../../shared/button';
import IconInput from '../../shared/input';
import { AuthService } from '../../../services/auth.service';
import { ApiError } from '../../../services/ApiBase';
import { AsyncStorageService } from '../../../services/asyncStorage.service';
import { IErrorResponse } from '../../../interfaces/responseError.interface';
import { PlatformOS } from '../../../utils/platform';
import EyeOff from '../../../assets/images/icons/eyeOff.svg';
import EyeOn from '../../../assets/images/icons/eyeOn.svg';

import { getStyles } from './styles';

const Login = (): JSX.Element => {
  const styles = getStyles();
  const toast = useToast();
  const navigation: any = useNavigation();
  const authService = new AuthService();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const { updateUser } = useUserContext();

  const redirectToSignupPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.SIGNUP);
    }
  };

  const login = async (): Promise<void> => {
    const data: ILoginResponse | ApiError = await authService.login(form);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });
      return;
    }

    if (data && (data as ILoginResponse).success) {
      await AsyncStorageService.setItemAsync('accessToken', (data as ILoginResponse).token);
      updateUser((data as ILoginResponse).user);
    } else {
      Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
        setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
      });
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

  const redirectToForgotPasswordPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.FORGOT_PASSWORD);
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
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/images/sketchFace.png')}
              width={255}
              height={225}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Log in or Sign up</Text>
            <View style={styles.inputMainContainer}>
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
                {errorMessage.password && (
                  <Text style={styles.errorMessage}>{errorMessage.password}</Text>
                )}
                <IconInput
                  icon={
                    showPassword ? (
                      <EyeOn width={18} height={18} />
                    ) : (
                      <EyeOff width={18} height={18} />
                    )
                  }
                  placeholder='Password'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  isPassword={!showPassword}
                  value={form.password}
                  onChangeText={handleOnChange('password')}
                  onIconPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>
            <View style={styles.loginWithContainer}>
              <View style={styles.otherVersionLogin}>
                <Text style={styles.loginText} onPress={redirectToForgotPasswordPage}>
                  Forgot password
                </Text>
                <Text
                  style={[styles.loginText, styles.textUnderscore]}
                  onPress={redirectToSignupPage}
                >
                  Sign Up
                </Text>
              </View>
              <Text style={styles.loginText}>or Log in with</Text>
              <View style={styles.socialContainer}>
                <Facebook width={25} height={25} />
                <Google width={25} height={25} />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Log in'
                  onPress={login}
                  width={230}
                  height={55}
                  backgroundColor={Colors.light.defaultYellow}
                  textColor={Colors.light.white}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
