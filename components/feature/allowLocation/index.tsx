import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import BackgroundImageContainer from '../../shared/screenWithBackground';
import Button from '../../shared/button';
import Colors from '../../../constants/Colors';
import { AllowLocationType } from './types';

import { getStyles } from './styles';

const AllowLocation = ({ onClick }: AllowLocationType): JSX.Element => {
  const styles = getStyles();

  const getLocationPermission = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== Location.PermissionStatus.GRANTED) {
      alert('Permission to access location was denied');
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundImageContainer
        source={require('../../../assets/images/images/locationBackground.png')}
      >
        <View style={styles.containerInformation}>
          <Text style={styles.title}>Find great places</Text>
          <Text style={styles.description}>
            Allow our app to access to your current location, so we can show you nearby food offers
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title='Enable location'
              onPress={getLocationPermission}
              width={230}
              height={55}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
            <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
              <Text style={styles.buttonDescription}>Maybe later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImageContainer>
    </View>
  );
};

export default AllowLocation;
