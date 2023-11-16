import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../shared/button';
import Colors from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation/routes';

import { getStyles } from './styles';

const Onboarding = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToUserPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.ONBOARDING_SECOND);
    }
  };

  const redirectToVendorPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.VENDOR_AUTH);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/images/logo.png')} width={300} height={210} />
      </View>
      <>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeDescription}>
          First marketplace for exclusive & sustainable food offers
        </Text>
        <Text style={styles.welcomeDescription}>Saving Tastes Good!</Text>
      </>
      <View style={styles.buttonContainer}>
        <Button
          title='Get started now'
          onPress={redirectToUserPage}
          width={230}
          height={55}
          backgroundColor={Colors.light.defaultPink}
          textColor={Colors.light.white}
        />
        <Button
          title='Switch to vendor'
          onPress={redirectToVendorPage}
          width={230}
          height={55}
          backgroundColor={Colors.light.defaultYellow}
          textColor={Colors.light.white}
        />
      </View>
    </View>
  );
};

export default Onboarding;
