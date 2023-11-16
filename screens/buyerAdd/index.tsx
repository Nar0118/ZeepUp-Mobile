import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import useAsyncEffect from 'use-async-effect';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import ButtonWithIcon from '../../components/shared/buttonIcon';
import ArrowBack from '../../assets/images/icons/arrowBack.svg';
import Trolley from '../../assets/images/icons/trolley.svg';
import Clock from '../../assets/images/icons/clockPink.svg';
import { ItemsService } from '../../services/items.service';
import { IItem, IItemResponse } from '../../interfaces/item.interface';
import { ApiError } from '../../services/ApiBase';
import { env } from '../../constants/env';
import { convertToAmOrPm } from '../../utils/convertToAmOrPm';
import { OpenClose } from '../../enums/openClose.enum';
import { calculatePriceWithDiscount } from '../../utils/calculatePriceWithDiscount';
import { IVendorAvailable } from '../../interfaces/vendorAvailable.interface';
import { checkIsOpen } from '../../utils/checkIsOpen';
import { WeekOptions } from '../../constants/weekOptions';
import { checkLink } from '../../utils/checkLink';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

type ParamList = {
  Buyer: {
    id: number;
  };
};

const BuyerAddToCart = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'Buyer'>>();
  const itemsService = new ItemsService();
  const [items, setItems] = useState<IItem | null>(null);
  const [itemsChildren, setItemsChildren] = useState<Array<IItem>>();
  const [vendorsAvailable, setVendorsAvailable] = useState<IVendorAvailable | null>(null);

  useAsyncEffect(async () => {
    if (id) {
      const data: IItemResponse | ApiError = await itemsService.getItemsById(id);

      if (data && 'items' in data) {
        setItems(data.items);
        setItemsChildren(data.itemsChildren);
        setVendorsAvailable(data.vendorsAvailable);
      }
    }
  }, [id]);

  const [isCheckboxChecked, setCheckboxChecked] = useState<Record<string, boolean>>({});

  const goBack = (): void => {
    navigation.goBack();
  };

  const handleCheckboxToggle = (id: number) => (): void => {
    setCheckboxChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return items ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: checkLink(items.image) ? items.image : env.BASE_API_URL + items.image }}
          resizeMode='cover'
          style={styles.backgroundImage}
        />
        <TouchableOpacity style={styles.arrowContainer} onPress={goBack}>
          <ArrowBack width={25} height={25} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.infoContainer}>
        <View style={styles.headerInfo}>
          <Image
            source={{
              uri: checkLink(items.user?.profile_photo_path)
                ? (items.user?.profile_photo_path as string)
                : env.BASE_API_URL + items.user?.profile_photo_path,
            }}
            width={35}
            height={35}
            resizeMode='cover'
            style={styles.profilePicture}
          />
          <View>
            <Text style={styles.soldByText}>Sold by</Text>
            <Text style={styles.title}>{items.user?.name}</Text>
            <Text style={styles.open}>{checkIsOpen(vendorsAvailable) ? 'Open' : 'Close'}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.foodTitle}>{items.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Price{' '}
              {items.discount ? (
                <>
                  ${calculatePriceWithDiscount(items.price, items.discount)}{' '}
                  <Text style={styles.deletedText}>${items.price}</Text>{' '}
                  <Text style={styles.percentText}>-{items.discount}%</Text>
                </>
              ) : (
                `${items.price}`
              )}
            </Text>
            <ButtonWithIcon
              title='Add your Cart'
              onPress={() => {}}
              containerStyles={styles.button}
              textStyle={styles.text}
              icon={<Trolley width={18} height={18} />}
            />
          </View>
        </View>
        <>
          <Text style={styles.promotionText}>Promotion</Text>
          <Text style={styles.promotionValues}>Quantity: {items.quantity}</Text>
          <Text style={styles.promotionValues}>Expiry Date: {items.expire_date}</Text>
          <Text style={styles.promotionValues}>Allergen Info: {items.alergen_info}</Text>
        </>
        {itemsChildren?.length ? (
          <>
            <Text style={styles.likeItemsTitle}>Items you would like to have!</Text>
            <View style={styles.itemWrapper}>
              {itemsChildren?.map((item) => (
                <View style={styles.itemContainer} key={item.id}>
                  <Image
                    source={{ uri: item.image }}
                    resizeMode='contain'
                    style={styles.itemImage}
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemValue}>{item.alergen_info}</Text>
                    <Text style={styles.itemValue}>Expiry: {items.expire_date}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemPriceText}>${item.price}</Text>
                  </View>
                  <CheckBox
                    size={25}
                    containerStyle={{
                      margin: 0,
                      padding: 0,
                    }}
                    checkedColor={Colors.light.defaultPink}
                    checked={isCheckboxChecked[item.id]}
                    onPress={handleCheckboxToggle(item.id)}
                  />
                </View>
              ))}
            </View>
          </>
        ) : null}
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <View>
          <View style={styles.opening}>
            <Text style={styles.openingText}>Opening hours</Text>
            <Clock width={15} height={15} />
          </View>
          <View>
            <ScrollView style={styles.optionContainer} horizontal>
              {WeekOptions.map((option: string) => (
                <TouchableOpacity key={option} style={styles.option}>
                  <Text style={styles.optionTitle}>{option}</Text>
                  <Text style={styles.optionText}>
                    Open:{' '}
                    {convertToAmOrPm(
                      vendorsAvailable?.[
                        (option.toLowerCase() + OpenClose.OPEN) as keyof IVendorAvailable
                      ] as string,
                    )}
                  </Text>
                  <Text style={styles.optionText}>
                    Close:{' '}
                    {convertToAmOrPm(
                      vendorsAvailable?.[
                        (option.toLowerCase() + OpenClose.CLOSE) as keyof IVendorAvailable
                      ] as string,
                    )}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <>{/* TODO: Show Loader */}</>
  );
};

export default BuyerAddToCart;
