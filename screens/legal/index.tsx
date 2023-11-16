import React from 'react';
import { Text, View, Linking } from 'react-native';
import { Links } from '../../utils/links';
import Libra from '../../assets/images/icons/libra.svg';

import { getStyles } from './styles';

const Legal = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Legal</Text>
        <Libra width={25} height={23} />
      </View>
      <Text style={styles.text} onPress={() => Linking.openURL(Links.TERMS_CONDITIONS_EN)}>
        Terms & Conditions
      </Text>
      <Text style={styles.text} onPress={() => Linking.openURL(Links.PRIVACY_POLICY_EN)}>
        Privacy Policy
      </Text>
    </View>
  );
};

export default Legal;
