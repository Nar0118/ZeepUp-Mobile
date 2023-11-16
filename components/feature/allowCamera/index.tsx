import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../shared/button';
import Colors from '../../../constants/Colors';
import { AllowCameraType } from './types';

import { getStyles } from './styles';

const AllowCamera = ({ onClick }: AllowCameraType): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const enableCamera = async (): Promise<void> => {
    const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
    await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraPerm.status === 'denied') {
      alert('Permission to access camera was denied');
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/images/camera.png')}
        resizeMode='stretch'
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Enable Camera</Text>
        <Text style={styles.description}>Please provide us access to take photos</Text>
        <View style={styles.buttonContainer}>
          <Button
            title='Enable Camera'
            onPress={enableCamera}
            width={230}
            height={55}
            fontSize={20}
            backgroundColor={Colors.light.defaultPink}
            textColor={Colors.light.white}
          />
          <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
            <Text style={styles.buttonDescription}>Maybe later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AllowCamera;
