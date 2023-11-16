import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import Onboarding from '../../components/feature/onboardingFirstScreen';
import OnboardingUserMainScreen from '../../components/feature/onboardingUserMain';

const OnboardingStackNavigator = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={Routes.ONBOARDING_FIRST}
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={Routes.ONBOARDING_SECOND}
        component={OnboardingUserMainScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default OnboardingStackNavigator;
