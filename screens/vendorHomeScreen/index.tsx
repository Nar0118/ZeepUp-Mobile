import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNavigationContext } from '../../contexts/NavigationContext';
import BottomNavigation from '../../components/feature/bottomNavigation';
import HomeVendorInformation from '../../components/feature/homeVendorInformation';
import { RecentOrders } from '../../components/feature/recentOrders';
import { RecentOrderType } from '../../components/feature/recentOrders/types';
import { ModalWrapper } from '../../components/shared/centerModal';
import Button from '../../components/shared/button';
import Colors from '../../constants/Colors';
import { Routes } from '../../navigation/routes';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { HomeProps, fakeData } from './types';
import Burger from '../../assets/images/icons/sidebar/burger.svg';
import Cube from '../../assets/images/icons/sidebar/cubes.svg';
import Fork from '../../assets/images/icons/sidebar/fork.svg';
import Order from '../../assets/images/icons/sidebar/orders.svg';
import Arrow from '../../assets/images/icons/arrowRightPink.svg';
import Close from '../../assets/images/icons/closePink.svg';

import { getStyles } from './styles';

const VendorHomeScreen = ({ route }: HomeProps): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const styles = getStyles();
  const navigation: any = useNavigation();
  const { lastRouteName, setLastRouteName } = useNavigationContext();

  const handleOpenModal = (): void => {
    setOpenModal(!openModal);
  };

  const navigateToAddItemPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.ADD_ITEM);
      setOpenModal(false);
    }
  };

  const navigateToOrderHistoryPage = (): void => {
    if (navigation) {
      navigation.navigate(BottomNavigator.ORDER_HISTORY);
    }
  };

  useEffect(() => {
    if (lastRouteName && lastRouteName === Routes.VENDOR_LOGIN_USER) {
      navigation.navigate(BottomNavigator.ALLOW_STEPS);

      const unsubscribe = navigation.addListener('blur', () => {
        setLastRouteName(route.name);
      });

      return unsubscribe;
    }
  }, [lastRouteName]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeVendorInformation />
        <View>
          <Text style={styles.orderTitle}>Recent orders</Text>
          <ScrollView horizontal>
            {fakeData?.map((item: RecentOrderType, index: number) => (
              <RecentOrders item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.containerCard}>
            <TouchableOpacity
              style={[styles.card, styles.backgroundYellow]}
              onPress={handleOpenModal}
            >
              <View style={styles.iconContainer}>
                <Burger width={30} height={27} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardText}>Publish Item</Text>
                <Arrow width={20} height={15} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconContainer}>
                <Cube width={20} height={20} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardText}>Publish Menu</Text>
                <Arrow width={20} height={15} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCard}>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconContainer}>
                <Fork width={18} height={20} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardText}>Manage Item</Text>
                <Arrow width={20} height={15} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateToOrderHistoryPage}>
              <View style={styles.iconContainer}>
                <Order width={20} height={20} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardText}>My orders</Text>
                <Arrow width={20} height={15} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
      <ModalWrapper modalVisible={openModal} setModalVisible={setOpenModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeContainer} onPress={handleOpenModal}>
            <Close width={25} height={25} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Select one operation</Text>
          <View style={styles.buttonContainer}>
            <Button
              title='Add Items'
              onPress={navigateToAddItemPage}
              width={90}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
            <Button
              title='List Items'
              onPress={() => {}}
              width={90}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.defaultYellow}
              textColor={Colors.light.white}
            />
          </View>
        </View>
      </ModalWrapper>
    </View>
  );
};

export default VendorHomeScreen;
