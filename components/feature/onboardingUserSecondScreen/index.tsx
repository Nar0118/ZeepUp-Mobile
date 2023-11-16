import React from 'react';
import { Text, View, Image } from 'react-native';
import BackgroundImageContainer from '../../shared/screenWithBackground';

import { getStyles } from './styles';

const OnboardingUserSecondScreen = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <BackgroundImageContainer
        source={require('../../../assets/images/images/onboarding/onboardingLunch.jpg')}
      >
        <>
          <View style={styles.overlay} />
          <View style={styles.containerInformation}>
            <Image
              source={require('../../../assets/images/images/onboarding/onboardingLunchCircle.png')}
              width={295}
              height={290}
            />

            <Text style={styles.description}>
              Together, we can make a lasting change towards a more sustainable future
            </Text>
          </View>
        </>
      </BackgroundImageContainer>
    </View>
  );
};

export default OnboardingUserSecondScreen;
