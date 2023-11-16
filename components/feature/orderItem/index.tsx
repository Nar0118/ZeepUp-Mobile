import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreCategoryFoodProps } from './types';
import Trash from '../../../assets/images/icons/trashPink.svg';
import Plus from '../../../assets/images/icons/plus.svg';
import Minus from '../../../assets/images/icons/minus.svg';

import { getStyles } from './styles';

export const OrderItem = ({ data }: StoreCategoryFoodProps): JSX.Element => {
  const navigation: any = useNavigation();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.titleInfoContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: data.image }} width={100} height={73} resizeMode='cover' />
            <View style={styles.addItem}>
              <View style={styles.addItemIcon}>
                <Minus width={16} height={4} />
              </View>
              <Text style={styles.countItem}>0</Text>
              <View style={styles.addItemIcon}>
                <Plus width={16} height={16} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.foodName}>{data.foodName}</Text>
            <View>
              <Text style={styles.categoryTitle}>
                Expire Date <Text style={styles.categoryValue}>2024-02-29</Text>
              </Text>
              <Text style={styles.categoryTitle}>
                Base Price <Text style={styles.categoryValue}>$16.34</Text>
              </Text>
              <Text style={styles.categoryTitle}>
                Discount <Text style={styles.categoryValue}>40%</Text>
              </Text>
              <Text style={styles.categoryTitle}>
                Tax Rate <Text style={styles.categoryValue}>6.625%</Text>
              </Text>
              <Text style={styles.categoryTitle}>
                Subtotal <Text style={styles.categoryValue}>$10.45</Text>
              </Text>
            </View>
          </View>
          <View>
            <Trash width={20} height={20} />
          </View>
        </View>
      </View>
    </View>
  );
};
