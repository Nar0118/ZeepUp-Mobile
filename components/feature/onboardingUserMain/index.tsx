import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { getStyles } from './styles';
import Swiper from 'react-native-swiper';
import OnboardingUserFirstScreen from '../onboardingUserFirstScreen';
import OnboardingUserSecondScreen from '../onboardingUserSecondScreen';
import OnboardingUserThirdScreen from '../onboardingUserThirdScreen';
import OnboardingUserFourthScreen from '../onboardingUserFourthScreen';

const OnboardingUserMainScreen = (): JSX.Element => {
  const styles = getStyles();
  const [showPagination, setShowPagination] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        dotColor='#BDC3CB'
        activeDotColor='#ffffff'
        dotStyle={{ width: 10, height: 10 }}
        activeDotStyle={{ width: 10, height: 10 }}
        showsPagination={showPagination}
        onIndexChanged={(index) => {
          setShowPagination(index !== 3);
        }}
      >
        <OnboardingUserFirstScreen />
        <OnboardingUserSecondScreen />
        <OnboardingUserThirdScreen />
        <OnboardingUserFourthScreen />
      </Swiper>
    </View>
  );
};

export default OnboardingUserMainScreen;
