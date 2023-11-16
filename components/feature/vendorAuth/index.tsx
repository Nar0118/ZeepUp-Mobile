import React from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation/routes';
import BackgroundImageContainer from '../../shared/screenWithBackground';
import ButtonWithIcon from '../../shared/buttonIcon';
import Business from '../../../assets/images/icons/addBusinness.svg';
import User from '../../../assets/images/icons/user.svg';

import { getStyles } from './styles';

const VendorAuth = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToLoginPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.VENDOR_LOGIN_USER);
    }
  };

  const redirectToBusinessPage = (): void => {
    if (navigation) {
      navigation.navigate(Routes.VENDOR_BUSINESS);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <BackgroundImageContainer
        source={require('../../../assets/images/images/vendorLoginBackground.png')}
      >
        <View style={styles.container}>
          <View style={styles.overlay} />
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/logoLight.png')}
              width={290}
              height={210}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.inputMainContainer}>
              <ButtonWithIcon
                title='Add your Restaurant'
                onPress={redirectToBusinessPage}
                containerStyles={styles.button}
                textStyle={styles.text}
                icon={<Business width={24} height={24} />}
              />
              <ButtonWithIcon
                title='Log in'
                onPress={redirectToLoginPage}
                containerStyles={styles.button}
                textStyle={styles.text}
                icon={<User width={22} height={22} />}
              />
            </View>
            <Text style={styles.bottomTitle}>
              Hey! <Text style={styles.yellowText}>Welcome!</Text>
            </Text>
          </View>
        </View>
      </BackgroundImageContainer>
    </TouchableWithoutFeedback>
  );
};

export default VendorAuth;
