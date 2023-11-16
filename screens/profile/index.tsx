import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { Routes } from '../../navigation/routes';
import { useUserContext } from '../../contexts/UserContextProvider';
import Button from '../../components/shared/button';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { AsyncStorageService } from '../../services/asyncStorage.service';
import { AuthService } from '../../services/auth.service';
import { ILogout } from '../../interfaces/auth.interface';
import { ApiError } from '../../services/ApiBase';
import { UserRouting } from './types';
import { ToastEnum } from '../../enums/toast.enum';
import User from '../../assets/images/icons/profilePage/user.svg';
import Paper from '../../assets/images/icons/profilePage/paper.svg';
import Settings from '../../assets/images/icons/profilePage/settings.svg';
import Support from '../../assets/images/icons/profilePage/support.svg';
import Payment from '../../assets/images/icons/profilePage/dollar.svg';
import Legal from '../../assets/images/icons/profilePage/libra.svg';
import Trash from '../../assets/images/icons/profilePage/trash.svg';
import ArrowRight from '../../assets/images/icons/profilePage/arrowRight.svg';
import ArrowRightWhite from '../../assets/images/icons/arrowRightWhite.svg';
import ProfileImage from '../../assets/images/icons/profileImage.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const Profile = (): JSX.Element => {
  const authService = new AuthService();
  const toast = useToast();

  const { user, updateUser } = useUserContext();

  const styles = getStyles();
  const navigation: any = useNavigation();

  const goBack = (): void => {
    navigation.goBack();
  };

  const profileTable: Array<UserRouting> = [
    {
      name: 'My Account',
      route: BottomNavigator.MY_ACCOUNT,
      icon: <User width={25} height={25} />,
    },
    { name: 'My orders', route: BottomNavigator.ORDER, icon: <Paper width={20} height={20} /> },
    {
      name: 'Settings',
      route: BottomNavigator.SETTINGS,
      icon: <Settings width={20} height={20} />,
    },
    {
      name: 'Support Ticket',
      route: BottomNavigator.SUPPORT_TICKET,
      icon: <Support width={20} height={20} />,
    },
    {
      name: 'Payments',
      route: BottomNavigator.PAYMENT_CARD_PAGE,
      icon: <Payment width={16} height={23} />,
    },
    { name: 'Legal', route: BottomNavigator.LEGAL, icon: <Legal width={20} height={19} /> },
    {
      name: 'Delete Account',
      route: BottomNavigator.DELETE_ACCOUNT,
      icon: <Trash width={16} height={16} />,
    },
  ];

  const logout = async (): Promise<void> => {
    const data: ILogout | ApiError = await authService.logout();

    if ('status' in data && data.status === 401) {
      updateUser(null, false);
      await AsyncStorageService.removeItemAsync('accessToken');

      toast.show(`Logged out successfully`, {
        type: ToastEnum.ERROR,
        icon: <ProfileImage width={25} height={25} />,
        dangerColor: Colors.light.defaultPink,
        placement: 'bottom',
      });

      if (navigation) {
        navigation.navigate(Routes.ROOT);
      }
    }

    if ('success' in data && data.success) {
      updateUser(null, false);
      await AsyncStorageService.removeItemAsync('accessToken');

      toast.show(`Logged out successfully`, {
        type: ToastEnum.ERROR,
        icon: <ProfileImage width={25} height={25} />,
        dangerColor: Colors.light.defaultPink,
        placement: 'bottom',
      });

      if (navigation) {
        navigation.navigate(Routes.ROOT);
      }
    }
  };

  const redirectToPage = (screen: string): void => {
    if (navigation) {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/images/profileInfo.png')}
          resizeMode='cover'
          style={styles.backgroundImageTop}
        />
        <TouchableOpacity style={styles.arrowContainer} onPress={goBack}>
          <ArrowRightWhite width={25} height={25} />
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>{user?.name}</Text>
      <Text style={styles.userEmail}>{user?.email}</Text>
      <View style={styles.infoContainerHeader}>
        <ImageBackground
          source={require('../../assets/images/images/borderTop.png')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        >
          <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.bottomContainer}>
              <View style={styles.itemsContainer}>
                {profileTable.map((item: UserRouting, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.tableItem}
                    onPress={() => redirectToPage(item.route)}
                  >
                    <View style={styles.titleContainer}>
                      <View style={styles.iconContainer}>{item.icon}</View>
                      <Text style={styles.tableTitle}>{item.name}</Text>
                    </View>
                    <ArrowRight width={18} height={18} />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Logout'
                  onPress={logout}
                  width={90}
                  height={30}
                  fontSize={12}
                  backgroundColor={Colors.light.defaultPink}
                  textColor={Colors.light.white}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Profile;
