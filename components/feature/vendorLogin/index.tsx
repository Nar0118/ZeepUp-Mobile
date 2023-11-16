import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Button from '../../shared/button';
import Colors from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { useNavigationContext } from '../../../contexts/NavigationContext';
import IconInput from '../../shared/input';
import { Routes } from '../../../navigation/routes';
import { PlatformOS } from '../../../utils/platform';
import BackgroundImageContainer from '../../shared/screenWithBackground';
import { AuthService } from '../../../services/auth.service';
import { useUserContext } from '../../../contexts/UserContextProvider';
import { ILoginResponse } from '../../../interfaces/auth.interface';
import { ApiError } from '../../../services/ApiBase';
import { AsyncStorageService } from '../../../services/asyncStorage.service';
import { IErrorResponse } from '../../../interfaces/responseError.interface';
import { UserRole } from '../../../interfaces/user.interface';
import { LoginProps } from './types';
import { ToastEnum } from '../../../enums/toast.enum';
import EyeOff from '../../../assets/images/icons/eyeOff.svg';
import EyeOn from '../../../assets/images/icons/eyeOn.svg';
import Mail from '../../../assets/images/icons/mail.svg';
import Facebook from '../../../assets/images/icons/facebookLogo.svg';
import Google from '../../../assets/images/icons/googleLogo.svg';

import { getStyles } from './styles';

const VendorLogin = ({ route }: LoginProps): JSX.Element => {
  const { setLastRouteName } = useNavigationContext();
  const styles = getStyles();
  const toast = useToast();
  const navigation: any = useNavigation();
  const { updateUser } = useUserContext();

  const authService = new AuthService();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dismissKeyboard = (): void => {
    Keyboard.dismiss();
  };

  const redirectToForgotPasswordPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.FORGOT_PASSWORD);
    }
  };

  const login = async (): Promise<void> => {
    const data: ILoginResponse | ApiError = await authService.login(form);

    if (data && (data as ILoginResponse).success) {
      await AsyncStorageService.setItemAsync('accessToken', (data as ILoginResponse).token);
      updateUser((data as ILoginResponse).user, true, UserRole.VENDOR);
    } else {
      Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
        setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
      });
    }

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setLastRouteName(route.name);
    });

    return unsubscribe;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === PlatformOS.ANDROID ? 'height' : ('' as any)}
        enabled={Platform.OS === 'ios'}
      >
        <BackgroundImageContainer
          source={require('../../../assets/images/images/vendorLoginBackground.png')}
        >
          <View style={styles.container}>
            <View style={styles.overlay} />
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/logoLight.png')}
                width={255}
                height={225}
              />
            </View>
            <View style={styles.infoContainer}>
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
                  <Text style={[styles.loginText, styles.textUnderscore]} onPress={() => {}}>
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
          </View>
        </BackgroundImageContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default VendorLogin;
