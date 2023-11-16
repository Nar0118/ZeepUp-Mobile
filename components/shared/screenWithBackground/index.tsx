import React from 'react';
import { ImageBackground } from 'react-native';
import { BackgroundImageProps } from './types';
import { getStyles } from './styles';

const BackgroundImageContainer = ({ source, children }: BackgroundImageProps): JSX.Element => {
  const styles = getStyles();

  return (
    <ImageBackground source={source} resizeMode='cover' style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageContainer;
