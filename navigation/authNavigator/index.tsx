import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import Login from '../../components/feature/login';
import Signup from '../../components/feature/signup';
import ForgotPassword from '../../components/feature/forgotPassword';
import AllowNotification from '../../components/feature/allowNotification';
import AllowLocation from '../../components/feature/allowLocation';
import AllowCamera from '../../components/feature/allowCamera';
import EmailVerify from '../../components/feature/emailVerify';

const AuthStackNavigator = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator initialRouteName={Routes.AUTH}>
      <StackNavigator.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.SIGNUP}
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.EMAIL_VERIFY}
        component={EmailVerify}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.ALLOW_NOTIFICATION}
        component={AllowNotification}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.ALLOW_LOCATION}
        component={AllowLocation}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.ALLOW_CAMERA}
        component={AllowCamera}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default AuthStackNavigator;
