import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import { useAsyncEffect } from 'use-async-effect';
import { useNavigationContext } from '../../contexts/NavigationContext';
import { Routes } from '../../navigation/routes';
import BottomNavigation from '../../components/feature/bottomNavigation';
import { StoreCategory } from '../../components/shared/storeCategory';
import HomeUserInformation from '../../components/feature/homeUserInformation';
import { CategoryFood } from '../../components/shared/category';
import { BottomModal } from '../../components/shared/bottomModal';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../interfaces/category.interface';
import { IUserResponse } from '../../interfaces/user.interface';
import { VendorsService } from '../../services/vendors.service';
import { ApiError } from '../../services/ApiBase';
import { useUserContext } from '../../contexts/UserContextProvider';
import { ToastEnum } from '../../enums/toast.enum';
import { categoryFakeData } from './fakeData';
import Button from '../../components/shared/button';
import Colors from '../../constants/Colors';
import Filter from '../../components/shared/filter';
import { offerExpireOption, priceOption, ratingOption } from './filterOptions';
import { HomeTypes } from './types';

import { getStyles } from './styles';

const Home = ({ route, navigation }: HomeTypes): JSX.Element => {
  const toast = useToast();

  const { isAuth } = useUserContext();

  const styles = getStyles();
  const categoryService = new CategoryService();
  const vendorsService = new VendorsService();

  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [vendors, setVendors] = useState<Array<IUserResponse>>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filtersData, setFiltersData] = useState<{
    rating: string;
    price: string;
    offerExpire: string;
  }>({
    rating: '',
    price: '',
    offerExpire: '',
  });
  const { lastRouteName, setLastRouteName } = useNavigationContext();

  useEffect(() => {
    if (lastRouteName && lastRouteName === Routes.EMAIL_VERIFY) {
      navigation.navigate(BottomNavigator.ALLOW_STEPS);

      const unsubscribe = navigation.addListener('blur', () => {
        setLastRouteName(route.name);
      });

      return unsubscribe;
    }
  }, [lastRouteName]);

  const getAllCategories = async (): Promise<void> => {
    const data: Array<ICategory> | ApiError = await categoryService.getCategory();

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    setCategories(data as Array<ICategory>);
  };

  const getAllVendors = async (filter?: string): Promise<void> => {
    const data: Array<IUserResponse> | ApiError = await vendorsService.getVendors(filter);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    setVendors(data as Array<IUserResponse>);
  };

  useAsyncEffect(async () => {
    if (isAuth) {
      await getAllCategories();
      await getAllVendors();
    }
  }, [isAuth]);

  const redirectToListCategoriesPage = (category: ICategory): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.LIST_CATEGORIES, { category });
    }
  };

  const resetVendorsData = async (): Promise<void> => {
    setFiltersData({
      rating: '',
      price: '',
      offerExpire: '',
    });
  };

  const handleFilterChange =
    (field: string) =>
    (value: string): void => {
      setFiltersData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    };

  const handleApplyFilter = async (): Promise<void> => {
    const filter = new URLSearchParams(filtersData).toString();

    await getAllVendors(filter);

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <HomeUserInformation isPermissionsUpdated={route?.params?.isPermissionsUpdated} />
      <View style={styles.infoContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View>
          <FlatList
            style={styles.flatListCategories}
            data={categories}
            contentContainerStyle={styles.flatListContainerStyles}
            horizontal
            renderItem={({ item, index }) => (
              <CategoryFood
                data={item}
                key={index}
                onPress={() => redirectToListCategoriesPage(item)}
              />
            )}
          />
        </View>
        <Text style={styles.title}>What’s around</Text>
        <ScrollView style={styles.scrollCategoryItems}>
          {!!vendors.length &&
            vendors.map((vendor) => (
              <ScrollView key={vendor.id} horizontal nestedScrollEnabled>
                <View style={styles.twoContainer}>
                  {vendor.items?.map((item) => (
                    <StoreCategory
                      item={item}
                      vendor={vendor}
                      key={item.id}
                      navigateRouteName={BottomNavigator.RESTAURANT_INFO}
                      fromRestaurantMenu={false}
                    />
                  ))}
                </View>
              </ScrollView>
            ))}
        </ScrollView>
      </View>
      <BottomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filters</Text>
          <View style={styles.line} />
          <View style={styles.modalFilterPart}>
            <View>
              <Filter
                title='Rating'
                options={ratingOption}
                value={filtersData.rating}
                onChange={handleFilterChange('rating')}
              />
            </View>
            <View>
              <Filter
                title='Discount'
                options={priceOption}
                value={filtersData.price}
                onChange={handleFilterChange('price')}
              />
            </View>
            <View>
              <Filter
                title='Offer Expiry'
                options={offerExpireOption}
                value={filtersData.offerExpire}
                onChange={handleFilterChange('offerExpire')}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Reset'
              onPress={resetVendorsData}
              width={110}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.white}
              textColor={Colors.light.defaultPink}
            />
            <Button
              title='Apply'
              onPress={handleApplyFilter}
              width={110}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
          </View>
        </View>
      </BottomModal>
      <BottomNavigation modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Home;
