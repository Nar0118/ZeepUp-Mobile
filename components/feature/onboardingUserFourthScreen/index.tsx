import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../shared/button';
import BackgroundImageContainer from '../../shared/screenWithBackground';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../constants/Colors';
import { getStyles } from './styles';
import { Routes } from '../../../navigation/routes';

const OnboardingUserFourthScreen = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToLoginPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.AUTH);
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundImageContainer
        source={require('../../../assets/images/images/onboarding/onboardingPear.png')}
      >
        <>
          <View style={styles.overlay} />
          <View style={styles.containerInformation}>
            <Text style={styles.title}>You’re done!</Text>
            <Text style={styles.description}>Lets get this party started</Text>
            <Button
              title='Get started'
              onPress={redirectToLoginPage}
              width={230}
              height={55}
              backgroundColor={Colors.light.defaultYellow}
              textColor={Colors.light.white}
            />
          </View>
        </>
      </BackgroundImageContainer>
    </View>
  );
};

export default OnboardingUserFourthScreen;
