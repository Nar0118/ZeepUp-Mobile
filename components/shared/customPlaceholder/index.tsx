import React from 'react';
import { Text, View } from 'react-native';
import { PlaceholderProps } from './types';

import { getStyles } from './styles';

export const Placeholder = ({ placeholderText, icon }: PlaceholderProps): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{placeholderText}</Text>
    </View>
  );
};
