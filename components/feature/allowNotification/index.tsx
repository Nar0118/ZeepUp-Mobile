import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../shared/button';
import Colors from '../../../constants/Colors';
import Bell from '../../../assets/images/icons/bell.svg';
import { AllowNotificationType } from './types';

import { getStyles } from './styles';

const AllowNotification = ({ onClick }: AllowNotificationType): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/images/pizza.png')} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Be on Touch!</Text>
          <Text style={styles.description}>
            Turn on notifications, this lets us to send you important updates, best food deals,
            favorite meals, new locations and latest news!
          </Text>
          <View style={styles.iconContainer}>
            <Bell width={53} height={62} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Allow notifications'
              onPress={onClick ? onClick : () => {}}
              width={230}
              height={50}
              fontSize={18}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
            <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
              <Text style={styles.buttonDescription}>Maybe later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AllowNotification;
