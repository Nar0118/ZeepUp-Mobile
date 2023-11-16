import React, { useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import useAsyncEffect from 'use-async-effect';
import { FlatList } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import IconInput from '../../components/shared/input';
import { StoreCategory } from '../../components/shared/storeCategory';
import { ModalWrapper } from '../../components/shared/centerModal';
import { DropdownMenu } from '../../components/shared/dropDown';
import Input from '../../components/shared/inputWithLabel';
import Button from '../../components/shared/button';
import { PeopleRate } from '../../components/feature/peopleRate';
import { VendorsService } from '../../services/vendors.service';
import { RatingService } from '../../services/rating.service';
import { ApiError } from '../../services/ApiBase';
import { IRestaurantInfo } from '../../interfaces/restaurant.interface';
import { IVendorAvailable } from '../../interfaces/vendorAvailable.interface';
import { ISuccessResponse } from '../../interfaces/successResponse.interface';
import { IErrorResponse } from '../../interfaces/responseError.interface';
import { checkLink } from '../../utils/checkLink';
import { checkIsOpen } from '../../utils/checkIsOpen';
import { convertToAmOrPm } from '../../utils/convertToAmOrPm';
import { WeekOptions } from '../../constants/weekOptions';
import { env } from '../../constants/env';
import { OpenClose } from '../../enums/openClose.enum';
import { ToastEnum } from '../../enums/toast.enum';
import Leaf from '../../assets/images/icons/whiteTree.svg';
import Search from '../../assets/images/icons/searchGray.svg';
import ArrowRight from '../../assets/images/icons/arrowRightSmall.svg';
import ArrowLeft from '../../assets/images/icons/arrowLeftSmall.svg';
import LeafActive from '../../assets/images/icons/tree.svg';
import LeafInactive from '../../assets/images/icons/inactiveLeaf.svg';
import Close from '../../assets/images/icons/closePink.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

type ParamList = {
  Restaurant: {
    id: number;
  };
};
const RestaurantDetails = (): JSX.Element => {
  const styles = getStyles();
  const screenWidth = Dimensions.get('window').width;
  const restaurantService = new VendorsService();
  const ratingService = new RatingService();
  const toast = useToast();

  const [openRateModal, setOpenRateModal] = useState<boolean>(false);
  const [showRatings, setShowRatings] = useState<boolean>(false);
  const [restaurantInfo, setRestaurantInfo] = useState<IRestaurantInfo | null>(null);
  const orderData = restaurantInfo?.orders;
  const formattedOrders = orderData?.map((order) => ({
    label: order.order_number,
    value: order.order_number,
  }));
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const screenHeight = Dimensions.get('window').height;

  const [errorMessage, setErrorMessage] = useState<{
    order_number: string;
    rating: string;
    comment: string;
  }>({
    order_number: '',
    rating: '',
    comment: '',
  });

  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'Restaurant'>>();

  const getRestaurant = async (id: number): Promise<void> => {
    const data: IRestaurantInfo | ApiError = await restaurantService.getVendorById(id);

    if ('errorMessage' in data) {
      return;
    }

    setRestaurantInfo(data as IRestaurantInfo);
  };

  useAsyncEffect(async () => {
    if (id) {
      await getRestaurant(id);
    }
  }, [id]);

  const handleOpenModal = (): void => {
    setOpenRateModal(!openRateModal);
  };

  const today = new Date();
  const dayOfWeek: string = WeekOptions[today.getDay()].toLowerCase();

  const dayOfWeekIsOpen = dayOfWeek + OpenClose.OPEN;
  const dayOfWeekIsClose = dayOfWeek + OpenClose.CLOSE;

  const handleStarPress = (selectedRating: number): void => {
    setRating(selectedRating);
  };

  const renderStars = (): Array<JSX.Element> => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)} activeOpacity={0.7}>
          {i <= rating ? (
            <LeafActive width={20} height={20} />
          ) : (
            <LeafInactive width={20} height={20} />
          )}
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  const renderRatingIcons = (rating: number): Array<JSX.Element> => {
    const fullLeaves = Math.floor(rating);

    const icons = [];

    for (let i = 0; i < fullLeaves; i++) {
      icons.push(<LeafActive key={i} width={15} height={15} />);
    }

    return icons;
  };

  const submitReview = async (): Promise<void> => {
    setErrorMessage({
      comment: '',
      order_number: '',
      rating: '',
    });

    if (!orderNumber) {
      setErrorMessage((prevState) => ({ ...prevState, order_number: 'Order Number Required' }));
      return;
    }

    if (!rating) {
      setErrorMessage((prevState) => ({ ...prevState, rating: 'Rating Required' }));
      return;
    }

    if (!comment) {
      setErrorMessage((prevState) => ({ ...prevState, comment: 'Comment Required' }));
      return;
    }

    const body = {
      comment,
      rating: rating.toString(),
      order_number: orderNumber,
    };

    if (restaurantInfo) {
      const data = await ratingService.addRating(restaurantInfo?.vendor.id.toString(), body);

      if ('errorMessage' in data) {
        toast.show(`${data.errorMessage}`, {
          type: ToastEnum.ERROR,
        });

        return;
      }
      if (data && (data as ISuccessResponse).success) {
        toast.show((data as ISuccessResponse).message, {
          type: ToastEnum.SUCCESS,
        });
        setOpenRateModal(!openRateModal);
      } else {
        Object.entries((data as IErrorResponse).data).forEach(([key, value]) => {
          setErrorMessage((prevState) => ({ ...prevState, [key]: value[0] }));
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      {restaurantInfo ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/images/restaurantInfo.png')}
              width={screenWidth}
              height={335}
              resizeMode='cover'
            />
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri: checkLink(restaurantInfo.vendor.profile_photo_path)
                    ? (restaurantInfo.vendor.profile_photo_path as string)
                    : env.BASE_API_URL + restaurantInfo.vendor.profile_photo_path,
                }}
                width={128}
                height={128}
                resizeMode='cover'
              />
            </View>
          </View>
          <View style={styles.infoContainerHeader}>
            <View>
              <View style={styles.rateContainer}>
                <View style={styles.rateNumber}>
                  <Text style={styles.rateText}>{restaurantInfo.vendorRating.avg.toFixed(2)}</Text>
                  <Leaf width={15} height={13} />
                </View>
                <Text style={styles.rateScore}>
                  {restaurantInfo.vendorRating.totalRating} ratings
                </Text>
              </View>
              {!showRatings && (
                <Text style={styles.selectRate} onPress={() => setShowRatings(!showRatings)}>
                  (Click to view)
                </Text>
              )}
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{restaurantInfo.vendor.name}</Text>
              {/* TODO: Follow icon */}
              {/* <LoveActive width={18} height={16} /> */}
            </View>
            <View>
              <Text style={styles.openText}>
                {checkIsOpen(restaurantInfo.vendor.vendorsAvailabilities) ? 'Open' : 'Close'}
              </Text>
              <Text style={styles.rateScore}>
                (
                {convertToAmOrPm(
                  restaurantInfo.vendor.vendorsAvailabilities?.[
                    dayOfWeekIsOpen as keyof IVendorAvailable
                  ] as string,
                )}{' '}
                -{' '}
                {convertToAmOrPm(
                  restaurantInfo.vendor.vendorsAvailabilities?.[
                    dayOfWeekIsClose as keyof IVendorAvailable
                  ] as string,
                )}
                )
              </Text>
            </View>
          </View>
          <View style={styles.infoContainerSearch}>
            <View style={styles.coloredContainer}>
              <View style={[styles.filter, styles.yellowColor]}>
                <Text style={styles.filterText}>Combo</Text>
              </View>
              <View style={[styles.filter, styles.pinkColor]}>
                <Text style={styles.filterText}>{restaurantInfo.vendor.zipcode}</Text>
              </View>
              <TouchableOpacity
                style={[styles.filter, styles.greenColor]}
                onPress={handleOpenModal}
              >
                <Text style={styles.filterText}>Rate now</Text>
              </TouchableOpacity>
            </View>
            <IconInput
              icon={<Search width={18} height={18} />}
              placeholder='Store menu'
              style={styles.inputStyle}
              containerStyles={styles.inputContainer}
              placeholderTextColor={Colors.light.placeholderGrey}
            />
          </View>
          {!showRatings ? (
            <>
              <View style={styles.chooseCategory}>
                <Text style={styles.menuTitle}>Menu</Text>
                <View style={styles.arrowContainer}>
                  <ArrowLeft width={11} height={11} />
                  {Object.keys(restaurantInfo.groupedItems).map((item, index) => (
                    <View key={index}>
                      <Text>{item}</Text>
                    </View>
                  ))}
                  <ArrowRight width={11} height={11} />
                </View>
              </View>
              <ScrollView style={styles.categoryContainer}>
                {Object.entries(restaurantInfo.groupedItems).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <Text>{key}</Text>
                    <FlatList
                      data={value}
                      horizontal
                      renderItem={({ item, index }) => (
                        <StoreCategory key={index} fromRestaurantMenu item={item} />
                      )}
                    />
                  </React.Fragment>
                ))}
              </ScrollView>
            </>
          ) : (
            <>
              <View style={styles.chooseCategory}>
                <Text style={styles.menuTitle}>Ratings & Reviews</Text>
                <View style={styles.rateInformation}>
                  <Text style={styles.rateTitle}>{restaurantInfo.vendorRating.avg.toFixed(2)}</Text>
                  <View style={styles.leafSection}>
                    {renderRatingIcons(restaurantInfo.vendorRating.avg)}
                  </View>
                  <Text style={styles.basedText}>
                    based on {restaurantInfo.vendorRating.totalRating} reviews
                  </Text>
                </View>
                <FlatList
                  style={{ height: screenHeight * 0.3 }}
                  data={restaurantInfo.ratings}
                  renderItem={({ item, index }) => (
                    <PeopleRate
                      key={index}
                      item={item}
                      isLastItem={index === restaurantInfo.ratings.length - 1}
                    />
                  )}
                />
              </View>
            </>
          )}
          <ModalWrapper modalVisible={openRateModal} setModalVisible={setOpenRateModal}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={() => setOpenRateModal(false)}
              >
                <Close width={25} height={25} />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{restaurantInfo.vendor.name}</Text>
              <View>
                <Text style={styles.label}>Order number</Text>
                {errorMessage.order_number && (
                  <Text style={styles.errorMessage}>{errorMessage.order_number}</Text>
                )}
                <DropdownMenu
                  item={formattedOrders as any}
                  dropdownStyle={styles.dropdown}
                  onChange={(value) => {
                    setOrderNumber(value);
                  }}
                  placeholderText='Select'
                />
              </View>
              <View>
                <Text style={styles.label}>Review</Text>
                {errorMessage.rating && (
                  <Text style={styles.errorMessage}>{errorMessage.rating}</Text>
                )}
                <View style={styles.ratingContainer}>{renderStars()}</View>
              </View>
              <View>
                <Text style={styles.label}>Comment</Text>
                {errorMessage.comment && (
                  <Text style={styles.errorMessage}>{errorMessage.comment}</Text>
                )}
                <Input
                  style={styles.inputStyleSmall}
                  containerStyles={styles.inputContainerSmall}
                  value={comment}
                  onChangeText={(value) => {
                    setComment(value);
                  }}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Submit'
                  onPress={submitReview}
                  width={90}
                  height={30}
                  fontSize={12}
                  backgroundColor={Colors.light.defaultPink}
                  textColor={Colors.light.white}
                />
              </View>
            </View>
          </ModalWrapper>
        </>
      ) : (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size='large' color={Colors.light.defaultPink} />
        </View>
      )}
    </View>
  );
};

export default RestaurantDetails;
