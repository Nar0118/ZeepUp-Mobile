import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Platform, Text } from 'react-native';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { SafeAreaView as RNDSafeAreaView } from 'react-native-safe-area-context';
import { PlatformOS } from '../../../utils/platform';
import { BottomNavigator } from '../../../utils/bottomNavigation';
import { HeaderType } from './types';
import BackButton from '../../../assets/images/icons/arrowBack.svg';
import BurgerMenu from '../../../assets/images/icons/burgerMenu.svg';
import Notification from '../../../assets/images/icons/notificationBell.svg';
import LogoHeader from '../../../assets/images/logoHeader.svg';

import { getStyles } from './styles';

const Header = ({
  backButton,
  isLogo,
  pageTitle,
  burgerMenuVisibility,
  notification,
}: HeaderType): JSX.Element => {
  const navigation: any = useNavigation();
  const route: any = useRoute();

  const styles = getStyles();

  const handleBack = (): void => {
    navigation.goBack();
  };

  const handleOpenDrawer = (): void => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const redirectToNotificationPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.VENDOR_NOTIFICATION);
    }
  };

  const InnerHeader = (): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View>
            {backButton && (
              <TouchableOpacity onPress={handleBack} activeOpacity={0.8}>
                <BackButton />
              </TouchableOpacity>
            )}
            {burgerMenuVisibility && (
              <TouchableOpacity onPress={handleOpenDrawer} activeOpacity={0.8}>
                <BurgerMenu />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {isLogo && (
          <View style={styles.imageContainer}>
            <LogoHeader />
          </View>
        )}
        {pageTitle && (
          <View style={styles.imageContainer}>
            <Text style={styles.title}>{pageTitle}</Text>
          </View>
        )}
        {notification ? (
          <TouchableOpacity onPress={redirectToNotificationPage} activeOpacity={0.8}>
            <Notification />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>
    );
  };

  return Platform.OS === PlatformOS.ANDROID ? (
    <RNDSafeAreaView>
      <InnerHeader />
    </RNDSafeAreaView>
  ) : (
    <SafeAreaView>
      <InnerHeader />
    </SafeAreaView>
  );
};

export default Header;
