import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import Mail from '../../../assets/images/icons/mail.svg';
import Colors from '../../../constants/Colors';
import { ToastEnum } from '../../../enums/toast.enum';
import { IForgotPasswordResponse } from '../../../interfaces/auth.interface';
import { IErrorResponse } from '../../../interfaces/responseError.interface';
import ModalPage from '../modalPage';
import { Routes } from '../../../navigation/routes';
import Button from '../../shared/button';
import IconInput from '../../shared/input';
import { AuthService } from '../../../services/auth.service';
import { ApiError } from '../../../services/ApiBase';

import { getStyles } from './styles';

const ForgotPassword = (): JSX.Element => {
  const styles = getStyles();
  const toast = useToast();
  const authService = new AuthService();
  const navigation: any = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const forgotPassword = async (): Promise<void> => {
    const data: IForgotPasswordResponse | ApiError = await authService.forgotPassword({ email });

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });
      return;
    }

    if (data && (data as IForgotPasswordResponse).status) {
      toast.show((data as IForgotPasswordResponse).status, {
        type: ToastEnum.SUCCESS,
      });
      navigation.navigate(Routes.LOGIN);
    } else {
      Object.values((data as IErrorResponse).data).forEach((item) => {
        setErrorMessage(item[0]);
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ModalPage image={require('../../../assets/images/images/forgotPassword.png')}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.description}>
              No problem. Just let us know your email address and we will email you a password reset
              link that will allow you to choose a new one.
            </Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <IconInput
              icon={<Mail width={18} height={18} />}
              placeholder='E-mail'
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              placeholderTextColor={Colors.light.placeholderGrey}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.buttonContainer}>
              <Button
                title='Send'
                onPress={forgotPassword}
                width={90}
                height={30}
                fontSize={13}
                backgroundColor={Colors.light.defaultYellow}
                textColor={Colors.light.white}
              />
            </View>
          </View>
        </ModalPage>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
