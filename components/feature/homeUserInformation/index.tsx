import React, { useState, useCallback } from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useUserContext } from '../../../contexts/UserContextProvider';
import IconInput from '../../shared/input';
import { BottomNavigator } from '../../../utils/bottomNavigation';
import { UserRole } from '../../../interfaces/user.interface';
import LocationIcon from '../../../assets/images/icons/locationPink.svg';
import ProfileImage from '../../../assets/images/icons/profileImage.svg';
import Search from '../../../assets/images/icons/search.svg';
import Microphone from '../../../assets/images/icons/microphone.svg';
import Colors from '../../../constants/Colors';
import { HomeUserInformationProps } from './types';

import { getStyles } from './styles';

const HomeUserInformation = ({ isPermissionsUpdated }: HomeUserInformationProps): JSX.Element => {
  const { user } = useUserContext();
  const styles = getStyles();
  const navigation: any = useNavigation();
  const [country, setCountry] = useState<string>('');
  const [locationStatus, setLocationStatus] = useState<Location.PermissionStatus>();

  useAsyncEffect(async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();

      setLocationStatus(status);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }, [isPermissionsUpdated]);

  useAsyncEffect(async () => {
    try {
      if (locationStatus !== Location.PermissionStatus.GRANTED) {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const { coords } = location;
      const { latitude, longitude } = coords;

      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address.length) {
        setCountry(`${address[0].country}, ${address[0].city}`);
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }, [locationStatus]);

  const redirectToLocationPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.NAVIGATION);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoPart}>
        <View>
          <Text style={styles.title}>
            Hello, <Text style={styles.coloredText}>{user?.name}</Text>
          </Text>
          <View style={styles.locationContainer}>
            <LocationIcon width={12} height={18} />
            <Text>{country || '-'}</Text>
          </View>
        </View>
        <ProfileImage width={45} height={45} />
      </View>
      {user?.role == UserRole.BUYER && (
        <View style={styles.searchPart}>
          <View style={styles.searchIcon}>
            <Search width={15} height={15} />
          </View>
          <IconInput
            placeholder='Search'
            style={styles.inputStyle}
            containerStyles={styles.inputContainer}
            placeholderTextColor={Colors.light.placeholderGrey}
          />
          <View style={styles.microphoneIcon}>
            <Microphone width={15} height={15} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeUserInformation;
