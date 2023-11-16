import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../../contexts/UserContextProvider';
import Leaf from '../../../assets/images/icons/tree.svg';
import Warning from '../../../assets/images/icons/warning.svg';

import { getStyles } from './styles';

const HomeVendorInformation = (): JSX.Element => {
  const { user } = useUserContext();
  const styles = getStyles();
  const navigation: any = useNavigation();
  const rating = 4.58;

  const renderRatingIcons = (rating: number): Array<JSX.Element> => {
    const fullLeaves = Math.floor(rating);

    const icons = [];

    for (let i = 0; i < fullLeaves; i++) {
      icons.push(<Leaf key={i} width={15} height={15} />);
    }

    return icons;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, <Text style={styles.coloredText}>{user?.name}</Text>
      </Text>
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantTitle}>Your Restaurant Ratings</Text>
        {renderRatingIcons(rating)}
        <Text style={styles.restaurantTitle}>{rating.toFixed(2)} (6 ratings)</Text>
      </View>
      <View>
        <Text style={styles.stepsTitle}>Getting started (mandatory steps)</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepInfo}>
            <Text style={styles.infoText}>Add Financials</Text>
            <Warning width={16} height={16} />
          </View>
          <View style={styles.stepInfo}>
            <Text style={styles.infoText}>Add your Cuisine</Text>
            <Warning width={16} height={16} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeVendorInformation;
