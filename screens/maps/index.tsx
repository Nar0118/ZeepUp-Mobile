import React from 'react';
import { Text, View } from 'react-native';

import { getStyles } from './styles';

const LocationMap = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text>Location</Text>
    </View>
  );
};

export default LocationMap;
