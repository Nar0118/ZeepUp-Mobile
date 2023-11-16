import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAsyncEffect from 'use-async-effect';
import Colors from '../../../constants/Colors';
import Button from '../../shared/button';
import IconInput from '../../shared/input';
import { useNavigationContext } from '../../../contexts/NavigationContext';
import { useUserContext } from '../../../contexts/UserContextProvider';
import { AsyncStorageService } from '../../../services/asyncStorage.service';
import { IUser } from '../../../interfaces/user.interface';
import { AuthService } from '../../../services/auth.service';
import { ILoginResponse } from '../../../interfaces/auth.interface';
import { ApiError } from '../../../services/ApiBase';
import { PlatformOS } from '../../../utils/platform';
import { ToastEnum } from '../../../enums/toast.enum';
import { EmailVerifyProps } from './types';
import { ISuccessResponse } from '../../../interfaces/successResponse.interface';

import { getStyles } from './styles';

const EmailVerify = ({ route }: EmailVerifyProps): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const [code, setCode] = useState<string | undefined>();
  const [canSendAgain, setCanSendAgain] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(30);
  const [userEmail, setUserEmail] = useState<string>('');

  const authService = new AuthService();
  const { updateUser } = useUserContext();
  const toast = useToast();

  const { setLastRouteName } = useNavigationContext();

  const handleSendEmail = async (): Promise<void> => {
    try {
      const result = await authService.resendEmail({ email: userEmail });

      if ((result as ISuccessResponse).success) {
        setCanSendAgain(false);
      } else {
        toast.show(`${(result as ApiError).errorMessage}`, {
          type: ToastEnum.ERROR,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (code) {
      const data: ILoginResponse | ApiError = await authService.emailVerify({
        code: code,
        email: userEmail,
      });

      if ('errorMessage' in data) {
        toast.show(`${data.errorMessage}`, {
          type: ToastEnum.ERROR,
        });
        return;
      }

      if (data && (data as ILoginResponse).success) {
        await AsyncStorageService.setItemAsync('accessToken', (data as ILoginResponse).token);

        updateUser((data as ILoginResponse).user as IUser);
      }
    }
  };

  const handleOnChange = (value: string): void => {
    setCode(value);
  };

  useAsyncEffect(async () => {
    const email = await AsyncStorage.getItem('userEmail');

    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    let intervalId: number | ReturnType<typeof setInterval> | undefined;

    if (!canSendAgain && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(intervalId);
            setCanSendAgain(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
      setTimer(30);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [canSendAgain, timer]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setLastRouteName(route.name);
    });

    return unsubscribe;
  }, []);

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
            <Text style={styles.title}>Verify your Email</Text>
            <View style={styles.inputMainContainer}>
              <View>
                <IconInput
                  placeholder='1234567'
                  style={styles.inputStyle}
                  containerStyles={styles.inputContainer}
                  placeholderTextColor={Colors.light.placeholderGrey}
                  value={code}
                  onChangeText={handleOnChange}
                  isNumeric
                />
              </View>
            </View>
            <View style={styles.verifyWithContainer}>
              <View style={styles.otherVersionLogin}>
                <Text style={styles.verifyText}>Don't get an email?</Text>
                {canSendAgain ? (
                  <Text
                    style={[styles.verifyText, styles.textUnderscore]}
                    onPress={handleSendEmail}
                  >
                    Send again
                  </Text>
                ) : (
                  <Text style={styles.verifyText}>{timer}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title='Submit'
                  onPress={handleSubmit}
                  width={230}
                  height={55}
                  backgroundColor={Colors.light.defaultYellow}
                  textColor={Colors.light.white}
                  disabled={!code}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default EmailVerify;
