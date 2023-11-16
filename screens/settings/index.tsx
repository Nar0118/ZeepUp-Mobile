import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toggle from '../../components/shared/toggleSwitch';
import Button from '../../components/shared/button';
import { BottomNavigator } from '../../utils/bottomNavigation';
import Setting from '../../assets/images/icons/settings.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const Settings = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const [isEnabledLocation, setIsEnabledLocation] = useState<boolean>(false);
  const [isEnabledCamera, setIsEnabledCamera] = useState<boolean>(false);
  const [isEnabledNotifications, setIsEnabledNotifications] = useState<boolean>(false);

  const redirectToHomePage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.HOME);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
          <Setting width={25} height={23} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Enable Location</Text>
          <Toggle enable={isEnabledLocation} setEnable={setIsEnabledLocation} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Enable access to camera</Text>
          <Toggle enable={isEnabledCamera} setEnable={setIsEnabledCamera} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Enable Notifications</Text>
          <Toggle enable={isEnabledNotifications} setEnable={setIsEnabledNotifications} />
        </View>
      </View>
      <View style={styles.buttonContainerBottom}>
        <Button
          title='Save'
          onPress={redirectToHomePage}
          width={90}
          height={30}
          fontSize={12}
          backgroundColor={Colors.light.defaultYellow}
          textColor={Colors.light.white}
        />
      </View>
    </View>
  );
};

export default Settings;
