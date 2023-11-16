import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { CategoryFoodProps } from './types';
import { env } from '../../../constants/env';

import { getStyles } from './styles';

export const CategoryFood = ({ data, onPress }: CategoryFoodProps): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Image
          source={{ uri: env.BASE_API_URL + data.image }}
          width={100}
          height={56}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
