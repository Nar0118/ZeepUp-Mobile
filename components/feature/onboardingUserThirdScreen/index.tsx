import React from 'react';
import { Text, View, Image } from 'react-native';

import { getStyles } from './styles';

const OnboardingUserThirdScreen = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/images/onboarding/onboardingChicken.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>All good things!</Text>
      <Text style={styles.description}>
        Don’t miss our food deals! Easy to order, pay directly & collect your meal
      </Text>
    </View>
  );
};

export default OnboardingUserThirdScreen;
