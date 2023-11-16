import React, { useEffect, type FC } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Routes, type RootStackParamList } from './routes';
import HomeStack from './HomeStack';
import OnboardingStackNavigator from './onboardingNavigatior';
import useCustomFonts from '../expo-fonts';
import { useUserContext } from '../contexts/UserContextProvider';
import AuthStackNavigator from './authNavigator';
import VendorAuthStackNavigator from './vendorAuthNavigator';

const Navigation = (): React.ReactElement | null => {
  const fontsLoaded = useCustomFonts();

  useEffect(() => {
    if (fontsLoaded) {
      console.log('Custom fonts loaded!');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

const RootStackNavigator: FC = (): React.ReactElement => {
  const { isAuth } = useUserContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name={Routes.ROOT} component={HomeStack} />
      ) : (
        <>
          <Stack.Screen name={Routes.ONBOARDING} component={OnboardingStackNavigator} />
          <Stack.Screen name={Routes.AUTH} component={AuthStackNavigator} />
          <Stack.Screen name={Routes.VENDOR_AUTH} component={VendorAuthStackNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export const useStackNavigation = () => {
  return useNavigation<StackNavigationProp<RootStackParamList>>();
};

export default Navigation;
