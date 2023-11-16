import React, { useState } from 'react';
import { Text, View, Vibration } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import useAsyncEffect from 'use-async-effect';
import { StoreCategoryFoodData } from '../../../components/shared/storeCategory/types';
import { BottomNavigator } from '../../../utils/bottomNavigation';
import { StoreCategory } from '../../../components/shared/storeCategory';
import { categoryFakeData } from '../fakeData';
import LikeActive from '../../../assets/images/icons/loveActive.svg';
import { IUserResponse } from '../../../interfaces/user.interface';
import { ApiError } from '../../../services/ApiBase';
import { VendorsService } from '../../../services/vendors.service';
import { ToastEnum } from '../../../enums/toast.enum';
import { IItem } from '../../../interfaces/item.interface';

import { getStyles } from './styles';

const Following = (): JSX.Element => {
  const styles = getStyles();
  const toast = useToast();

  const vendorsService = new VendorsService();

  const [vendors, setVendors] = useState<Array<IUserResponse>>([]);
  const [data, setData] = useState<Array<StoreCategoryFoodData>>(categoryFakeData);

  const getAllVendors = async (): Promise<void> => {
    const data: Array<IUserResponse> | ApiError = await vendorsService.getVendors();

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    setVendors(data as Array<IUserResponse>);
  };

  useAsyncEffect(async () => {
    await getAllVendors();
  }, []);

  const onLikePress = (index: number): void => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], liked: !updatedData[index].liked };

    if (!updatedData[index].liked) {
      updatedData.splice(index, 1);
      Vibration.vibrate(50);
    }

    setData(updatedData);
  };

  const groupedData: Array<Array<StoreCategoryFoodData>> = [];

  for (let i = 0; i < data.length; i += 2) {
    const pair: Array<StoreCategoryFoodData> = [];
    pair.push(data[i]);

    if (i + 1 < data.length) {
      pair.push(data[i + 1]);
    }

    groupedData.push(pair);
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal nestedScrollEnabled style={styles.scrollCategoryItems}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Following</Text>
            <LikeActive width={34} height={34} />
          </View>
          {vendors?.map((vendor) => (
            <View key={vendor.id} style={styles.twoContainer}>
              {vendor.items?.map((item: IItem, index: number) => (
                <StoreCategory
                  item={item}
                  key={item.id}
                  onLikePress={onLikePress}
                  fromFollowing
                  index={index}
                  navigateRouteName={BottomNavigator.RESTAURANT_INFO}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Following;
