import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VendorHomeScreen from '../vendorHomeScreen';
import SidebarContent from '../../components/feature/sidebarContent';
import Header from '../../components/feature/header';
import OrderHistory from '../orderHistory';
import AddItem from '../addItem';
import VendorNotifications from '../vendorNotification';
import { BottomNavigator } from '../../utils/bottomNavigation';
import SupportTicketVendor from '../supportTicketVendor';

const Drawer = createDrawerNavigator();

const VendorHome = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName={BottomNavigator.VENDOR_SIDEBAR}
      drawerContent={SidebarContent}
    >
      <Drawer.Screen
        name={BottomNavigator.VENDOR_SIDEBAR}
        component={VendorHomeScreen}
        options={{
          headerShown: true,
          header: () => <Header isLogo burgerMenuVisibility notification />,
        }}
      />
      <Drawer.Screen
        name={BottomNavigator.ADD_ITEM}
        component={AddItem}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <Drawer.Screen
        name={BottomNavigator.ORDER_HISTORY}
        component={OrderHistory}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <Drawer.Screen
        name={BottomNavigator.VENDOR_NOTIFICATION}
        component={VendorNotifications}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
      <Drawer.Screen
        name={BottomNavigator.SUPPORT_TICKET_VENDOR}
        component={SupportTicketVendor}
        options={{
          headerShown: true,
          header: () => <Header backButton isLogo />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default VendorHome;
