import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import { useUserContext } from '../contexts/UserContextProvider';
import { UserRole } from '../interfaces/user.interface';
import LocationMap from '../screens/maps';
import RestaurantDetails from '../screens/restaurantDetails';
import Notification from '../screens/notification';
import Following from '../screens/home/following';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import ListCategories from '../screens/listCategories';
import BuyerAddToCart from '../screens/buyerAdd';
import MyAccount from '../screens/myAccount';
import PaymentPage from '../screens/paymentPage';
import PayStripe from '../screens/payStripe';
import OrderConfirmed from '../screens/orderConfirmed';
import AllowSteps from '../screens/allowSteps';
import Legal from '../screens/legal';
import Settings from '../screens/settings';
import DeleteAccount from '../screens/deleteAccount';
import Payments from '../screens/payments';
import SupportTicket from '../screens/supportTicket';
import Order from '../screens/order';
import CanceledOrder from '../screens/canceledOrder';
import VendorHome from '../screens/vendorHome';
import Header from '../components/feature/header';
import { BottomNavigator } from '../utils/bottomNavigation';

import { getStyles } from './styles';

const HomeStack = (): JSX.Element => {
  const { role } = useUserContext();

  const StackNavigator = createStackNavigator();
  const styles = getStyles();

  return (
    <StackNavigator.Navigator
      initialRouteName={
        role === UserRole.BUYER ? BottomNavigator.HOME : BottomNavigator.VENDOR_HOME
      }
    >
      <StackNavigator.Screen
        name={BottomNavigator.HOME}
        component={Home}
        options={{
          headerShown: false,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.VENDOR_HOME}
        component={VendorHome}
        options={{
          headerShown: false,
          header: () => <Header isLogo burgerMenuVisibility />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.ALLOW_STEPS}
        component={AllowSteps}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.NAVIGATION}
        component={LocationMap}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.CART}
        component={Cart}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo={false} pageTitle='Your Cart' />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.FOLLOWING}
        component={Following}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.RESTAURANT_INFO}
        component={RestaurantDetails}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.BUYER_CART}
        component={BuyerAddToCart}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.LIST_CATEGORIES}
        component={ListCategories}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.MY_ACCOUNT}
        component={MyAccount}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.LEGAL}
        component={Legal}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.DELETE_ACCOUNT}
        component={DeleteAccount}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.SETTINGS}
        component={Settings}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.SUPPORT_TICKET}
        component={SupportTicket}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.PAYMENT_PAGE}
        component={PaymentPage}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.PAYMENT_CARD_PAGE}
        component={Payments}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.ORDER}
        component={Order}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.CANCELLED_ORDER}
        component={CanceledOrder}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.PAY_NOW}
        component={PayStripe}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={BottomNavigator.ORDER_CONFIRMED}
        component={OrderConfirmed}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeStack;
