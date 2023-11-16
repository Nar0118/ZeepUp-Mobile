import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getStyles } from './styles';

const ModalPage = ({ image, children }: any): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageContainer} height={320} width={screenWidth} />
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default ModalPage;
