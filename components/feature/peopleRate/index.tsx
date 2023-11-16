import React from 'react';
import { Text, View, Image } from 'react-native';
import { PeopleReviewProps } from './types';
import Leaf from '../../../assets/images/icons/tree.svg';

import { getStyles } from './styles';

export const PeopleRate = ({ item, isLastItem }: PeopleReviewProps): JSX.Element => {
  const styles = getStyles();

  const renderRatingIcons = (rating: number): Array<JSX.Element> => {
    const fullLeaves = Math.floor(rating);

    const icons = [];

    for (let i = 0; i < fullLeaves; i++) {
      icons.push(<Leaf key={i} width={12} height={12} />);
    }

    return icons;
  };

  const formatDateString = (inputDateString: string): string => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(inputDateString).toLocaleDateString('en-US', options as any);
    return formattedDate;
  };

  const originalDateString = item.created_at;
  const formattedDate = formatDateString(originalDateString);

  return (
    <View style={[styles.container, isLastItem && styles.lastElement]}>
      <View style={styles.userInfo}>
        <Image
          source={require('../../../assets/images/images/defaultUser.png')}
          resizeMode='stretch'
          style={styles.image}
        />
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.leafContainer}>{renderRatingIcons(item.rating)}</View>
            <Text style={styles.userName}>{item.rating}</Text>
          </View>
          <Text style={styles.commentText}>{item.comment}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.commentText}>{formattedDate}</Text>
      </View>
    </View>
  );
};
