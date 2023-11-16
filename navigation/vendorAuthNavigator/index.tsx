import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import VendorAuth from '../../components/feature/vendorAuth';
import VendorLogin from '../../components/feature/vendorLogin';
import VendorBusiness from '../../components/feature/vendorBusiness';
import Header from '../../components/feature/header';
import ForgotPassword from '../../components/feature/forgotPassword';
import AllowNotification from '../../components/feature/allowNotification';
import AllowLocation from '../../components/feature/allowLocation';
import AllowCamera from '../../components/feature/allowCamera';

const VendorAuthStackNavigator = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator initialRouteName={Routes.VENDOR_AUTH}>
      <StackNavigator.Screen
        name={Routes.VENDOR_LOGIN}
        component={VendorAuth}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.VENDOR_LOGIN_USER}
        component={VendorLogin}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.VENDOR_BUSINESS}
        component={VendorBusiness}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
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

export default VendorAuthStackNavigator;
