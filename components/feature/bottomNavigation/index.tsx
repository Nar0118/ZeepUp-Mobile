import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../../contexts/UserContextProvider';
import { BottomNavigator } from '../../../utils/bottomNavigation';
import { UserRole } from '../../../interfaces/user.interface';
import { BottomNavigationProps } from './types';
import Bell from '../../../assets/images/icons/bottomNavigation/notification.svg';
import Filter from '../../../assets/images/icons/bottomNavigation/filter.svg';
import Like from '../../../assets/images/icons/bottomNavigation/like.svg';
import Profile from '../../../assets/images/icons/bottomNavigation/user.svg';
import BuyCart from '../../../assets/images/icons/bottomNavigation/buyCart.svg';
import Clock from '../../../assets/images/icons/bottomNavigation/clock.svg';
import Support from '../../../assets/images/icons/bottomNavigation/support.svg';
import User from '../../../assets/images/icons/bottomNavigation/profile.svg';

import { getStyles } from './styles';

const BottomNavigation = ({
  modalVisible,
  setModalVisible,
}: BottomNavigationProps): JSX.Element => {
  const { role } = useUserContext();

  const styles = getStyles();
  const navigation: any = useNavigation();

  const redirectToNotificationPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.NOTIFICATION);
    }
  };

  const redirectToFollowingPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.FOLLOWING);
    }
  };

  const redirectToProfilePage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.PROFILE);
    }
  };

  const redirectToCartPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.CART);
    }
  };

  const openFiltersModal = (): void => {
    if (setModalVisible) {
      setModalVisible(!modalVisible);
    }
  };

  const redirectToSupportPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.SUPPORT_TICKET_VENDOR);
    }
  };

  return (
    <View style={styles.container}>
      {role === UserRole.BUYER ? (
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconInfo}
            activeOpacity={1}
            onPress={redirectToNotificationPage}
          >
            <Bell width={22} height={26} />
            <Text style={styles.text}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconInfo} activeOpacity={1} onPress={openFiltersModal}>
            <Filter width={30} height={20} />
            <Text style={styles.text}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buyContainer}
            activeOpacity={1}
            onPress={redirectToCartPage}
          >
            <View style={styles.iconInfo}>
              <BuyCart width={31} height={28} />
              <Text style={styles.text}>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconInfo}
            activeOpacity={1}
            onPress={redirectToFollowingPage}
          >
            <Like width={28} height={26} />
            <Text style={styles.text}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconInfo}
            activeOpacity={1}
            onPress={redirectToProfilePage}
          >
            <Profile width={25} height={25} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconInfo} activeOpacity={1}>
            <Clock width={20} height={20} />
            <Text style={styles.text}>Availability</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconInfo}
            activeOpacity={1}
            onPress={redirectToSupportPage}
          >
            <Support width={20} height={20} />
            <Text style={styles.text}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconInfo} activeOpacity={1}>
            <User width={20} height={20} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BottomNavigation;
