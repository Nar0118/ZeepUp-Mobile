import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import useAsyncEffect from 'use-async-effect';
import IconInput from '../../components/shared/input';
import { StoreCategory } from '../../components/shared/storeCategory';
import { SortModal } from '../../components/feature/sortModal';
import { RatingModal } from '../../components/feature/ratingModal';
import { PriceModal } from '../../components/feature/priceModal';
import { CategoriesModal } from '../../components/feature/categoriesModal';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { IFiltersData, RouteType } from './types';
import Search from '../../assets/images/icons/search.svg';
import Filter from '../../assets/images/icons/filtersBlack.svg';
import ArrowSmall from '../../assets/images/icons/arrowSmallBlack.svg';
import { VendorsService } from '../../services/vendors.service';
import { ToastEnum } from '../../enums/toast.enum';
import { ICategory } from '../../interfaces/category.interface';
import { CategorySort } from '../../enums/categorySort.enum';
import { IItem } from '../../interfaces/item.interface';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const ListCategories = (): JSX.Element => {
  const vendorsService = new VendorsService();
  const toast = useToast();

  const [vendors, setVendors] = useState<Array<ICategory>>([]);
  const [filteredVendors, setFilteredVendors] = useState<Array<ICategory>>([]);
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);
  const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
  const [openPriceModal, setOpenPriceModal] = useState<boolean>(false);
  const [openCategoriesModal, setOpenCategoriesModal] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('');

  const styles = getStyles();
  const {
    params: { category },
  } = useRoute<RouteProp<RouteType, 'List'>>();

  const [filtersData, setFiltersData] = useState<IFiltersData>({
    rating: '',
    price: '',
    categories: [`${category.id}`],
  });

  const getVendors = async (filters: string): Promise<void> => {
    const data = await vendorsService.getVendors(filters, true);

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    setVendors(data as Array<ICategory>);
    setFilteredVendors(data as Array<ICategory>);
  };

  const getFilteredVendors = async (): Promise<void> => {
    if (filtersData.rating || filtersData.price || filtersData.categories.length) {
      const categories = filtersData.categories.map((item) => `&categories[]=${item}`);
      const filter = new URLSearchParams({
        rating: filtersData.rating,
        price: filtersData.price,
      }).toString();

      await getVendors(filter + categories.toString().split(',').join(''));
    }
  };

  useAsyncEffect(async () => {
    await getFilteredVendors();
  }, [filtersData]);

  const compareByRating = (a: IItem, b: IItem): number => {
    const ratingA = a.user!.rating || 0;
    const ratingB = b.user!.rating || 0;

    if (ratingA! < ratingB!) {
      return 1;
    }
    if (ratingA! > ratingB!) {
      return -1;
    }
    return 0;
  };

  const compareByPrice = (a: IItem, b: IItem, isHigh?: boolean): number => {
    const ratingA = a.price || 0;
    const ratingB = b.price || 0;

    if (ratingA! < ratingB!) {
      return isHigh ? 1 : -1;
    }
    if (ratingA! > ratingB!) {
      return isHigh ? -1 : 1;
    }
    return 0;
  };

  // TODO: sorting functions
  useEffect(() => {
    switch (sort) {
      case CategorySort.AVERAGE_RATING: {
        const data = filteredVendors.sort((a, b) => {
          a.items!.sort(compareByRating);
          b.items!.sort(compareByRating);

          return compareByRating(a.items![0], b.items![0]);
        });

        setFilteredVendors(data);
        setSort('');
        break;
      }
      case CategorySort.PRICE_LOW_TO_HIGH: {
        const data = filteredVendors.sort((a, b) => {
          a.items!.sort(compareByPrice);
          b.items!.sort(compareByPrice);

          return compareByPrice(a.items![0], b.items![0]);
        });

        setFilteredVendors(data);
        setSort('');
        break;
      }
      case CategorySort.PRICE_HIGH_TO_LOW: {
        const data = filteredVendors.sort((a, b) => {
          a.items!.sort((a, b) => compareByPrice(a, b, true));
          b.items!.sort((a, b) => compareByPrice(a, b, true));

          return compareByPrice(a.items![0], b.items![0], true);
        });

        setFilteredVendors(data);
        setSort('');
        break;
      }
      default: {
        setFilteredVendors(vendors);
        setSort('');
      }
    }
  }, [sort]);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterInfo}
          onPress={() => setOpenSortModal(!openSortModal)}
        >
          <Filter width={15} height={10} />
          <Text style={styles.infoText}>Sort</Text>
          <ArrowSmall width={10} height={10} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterInfo}
          onPress={() => setOpenCategoriesModal(!openCategoriesModal)}
        >
          <Text style={styles.infoText}>Categories</Text>
          <ArrowSmall width={5} height={3} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterInfo}
          onPress={() => setOpenRatingModal(!openRatingModal)}
        >
          <Text style={styles.infoText}>Rating</Text>
          <ArrowSmall width={5} height={3} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterInfo}
          onPress={() => setOpenPriceModal(!openPriceModal)}
        >
          <Text style={styles.infoText}>Price</Text>
          <ArrowSmall width={5} height={3} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchPart}>
          <View style={styles.searchIcon}>
            <Search width={15} height={15} />
          </View>
          <IconInput
            placeholder='Search'
            style={styles.inputStyle}
            placeholderTextColor={Colors.light.placeholderGrey}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollCategoryItems}>
        {filteredVendors.map((vendor) => (
          <ScrollView horizontal nestedScrollEnabled key={vendor.id}>
            <View>
              <Text style={styles.categoryName}>{vendor.title}</Text>

              <View style={styles.twoContainer}>
                {vendor.items?.map((item) => (
                  <StoreCategory
                    item={item}
                    vendor={item.user}
                    key={item.id}
                    navigateRouteName={BottomNavigator.RESTAURANT_INFO}
                    fromRestaurantMenu={false}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        ))}
      </ScrollView>
      <SortModal openModal={openSortModal} setOpenModal={setOpenSortModal} setSort={setSort} />
      <RatingModal
        openModal={openRatingModal}
        setOpenModal={setOpenRatingModal}
        setFiltersData={setFiltersData}
      />
      <PriceModal
        openModal={openPriceModal}
        setOpenModal={setOpenPriceModal}
        setFiltersData={setFiltersData}
      />
      <CategoriesModal
        openModal={openCategoriesModal}
        setOpenModal={setOpenCategoriesModal}
        setFiltersData={setFiltersData}
        categoryId={category.id}
      />
    </View>
  );
};

export default ListCategories;
