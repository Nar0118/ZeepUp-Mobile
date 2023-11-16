import React from 'react';
import { Text, View, Image } from 'react-native';

import { getStyles } from './styles';

const OnboardingUserFirstScreen = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/images/onboarding/onboardingOrange.png')}
          width={250}
          height={210}
        />
      </View>
      <Text style={styles.title}>Choose your favorite food</Text>
      <Text style={styles.description}>Made locally-thought globally!</Text>
    </View>
  );
};

export default OnboardingUserFirstScreen;
