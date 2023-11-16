import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigator } from '../../../utils/bottomNavigation';
import { StoreCategoryFoodProps } from './types';
import Leaf from '../../../assets/images/icons/tree.svg';
import Plus from '../../../assets/images/icons/plusPink.svg';
import LikeActive from '../../../assets/images/icons/loveActive.svg';
import LikeInactive from '../../../assets/images/icons/loveInactive.svg';
import { env } from '../../../constants/env';
import { checkLink } from '../../../utils/checkLink';
import { truncateText } from '../../../utils/truncateText';
import { calculatePriceWithDiscount } from '../../../utils/calculatePriceWithDiscount';
import { checkIsOpen } from '../../../utils/checkIsOpen';

import { getStyles } from './styles';

export const StoreCategory = ({
  data,
  navigateRouteName,
  fromRestaurantMenu,
  fromFollowing = false,
  onLikePress,
  index,
  item,
  vendor,
}: StoreCategoryFoodProps): JSX.Element => {
  const navigation: any = useNavigation();
  const styles = getStyles();

  const renderLeafIcons = (rate: number = 0): Array<JSX.Element> => {
    const numberOfLeaves = Math.floor(rate);
    const leafArray = Array.from({ length: numberOfLeaves }, (_, index) => (
      <Leaf key={index} width={16} height={13} />
    ));
    return leafArray;
  };

  const redirectToRestaurantPage = (): void => {
    if (navigation && vendor) {
      navigation.navigate(navigateRouteName, {
        id: vendor.id,
      });
    }
  };

  const redirectToBuyerCartPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.BUYER_CART, {
        id: item.id,
      });
    }
  };

  return (
    <View style={styles.container}>
      {!fromRestaurantMenu && (
        <View style={styles.headerPart}>
          <TouchableOpacity style={styles.titleContainer} onPress={redirectToRestaurantPage}>
            <Image
              source={{
                uri: checkLink(vendor?.profile_photo_path)
                  ? (vendor?.profile_photo_path as string)
                  : env.BASE_API_URL + vendor?.profile_photo_path,
              }}
              width={20}
              height={20}
              resizeMode='cover'
            />
            <Text style={styles.name}>{vendor?.name}</Text>
            {fromFollowing && (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => onLikePress && onLikePress(index ?? 0)}
              >
                {data?.liked ? (
                  <LikeActive width={18} height={18} />
                ) : (
                  <LikeInactive width={18} height={18} />
                )}
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          {vendor?.rating ? (
            <View style={styles.titleContainer}>
              <Text style={styles.destinationText}>{vendor?.rating}</Text>
              <View style={styles.leafContainer}>{renderLeafIcons(vendor?.rating)}</View>
            </View>
          ) : null}
        </View>
      )}
      <TouchableOpacity style={styles.shadowWrapper} onPress={redirectToBuyerCartPage}>
        <View style={styles.infoContainer}>
          <View style={styles.titleInfoContainer}>
            <View>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDescription}>{truncateText(item.description, 20)}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: checkLink(item.image) ? item.image : env.BASE_API_URL + item.image,
                }}
                width={126}
                height={92}
                resizeMode='cover'
              />
              <View style={styles.plusContainer}>
                <Plus width={25} height={25} />
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Price{' '}
              {+item.discount ? (
                <>
                  ${calculatePriceWithDiscount(item.price, item.discount)}{' '}
                  <Text style={styles.deletedText}>${Number(item.price).toFixed(2)}</Text>{' '}
                  <Text style={styles.percentText}>-{item.discount}%</Text>
                </>
              ) : (
                `$${Number(item.price).toFixed(2)}`
              )}
            </Text>
            <Text style={styles.openTextStyles}>
              {checkIsOpen(vendor?.vendorsAvailabilities) ? 'Open' : 'Close'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
