import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { DrawerMenuSubItemType, DrawerMenuType } from './types';
import Home from '../../../assets/images/icons/sidebar/home.svg';
import Star from '../../../assets/images/icons/sidebar/star.svg';
import Burger from '../../../assets/images/icons/sidebar/burger.svg';
import Cube from '../../../assets/images/icons/sidebar/cubes.svg';
import Fork from '../../../assets/images/icons/sidebar/fork.svg';
import Tax from '../../../assets/images/icons/sidebar/tax.svg';
import Order from '../../../assets/images/icons/sidebar/orders.svg';
import Finance from '../../../assets/images/icons/sidebar/finance.svg';
import Portrait from '../../../assets/images/icons/sidebar/portrait.svg';

import { getStyles } from './styles';

const SidebarContent = (): JSX.Element => {
  const styles = getStyles();

  const [expandedItems, setExpandedItems] = useState<Array<string>>([]);

  const handleItemPress = (label: string): void => {
    setExpandedItems((prevItems) =>
      prevItems.includes(label)
        ? prevItems.filter((item) => item !== label)
        : [...prevItems, label],
    );
  };

  const isItemExpanded = (label: string): boolean => expandedItems.includes(label);
  const hasSubItems = (item: { subItems?: Array<DrawerMenuSubItemType> }): number | undefined =>
    item.subItems && item.subItems.length;

  const drawerItems: Array<DrawerMenuType> = [
    {
      label: 'Home',
      icon: <Home width={20} height={18} />,
      subItems: [{ name: 'Reports', navigation: '' }],
    },
    { label: 'Rating', icon: <Star width={20} height={20} /> },
    {
      label: 'Publish an Item',
      icon: <Burger width={21} height={19} />,
      subItems: [
        { name: 'Publish an item', navigation: '' },
        { name: 'View List', navigation: '' },
      ],
    },
    {
      label: 'Create a group',
      icon: <Cube width={20} height={20} />,
      subItems: [
        { name: 'Publish a group', navigation: '' },
        { name: 'View group', navigation: '' },
      ],
    },
    {
      label: 'Manage Cuisine',
      icon: <Fork width={18} height={20} />,
      subItems: [
        { name: 'Manage Cuisine', navigation: '' },
        { name: 'List cuisine', navigation: '' },
      ],
    },
    { label: 'Special Tax', icon: <Tax width={17} height={19} /> },
    {
      label: 'My Orders',
      icon: <Order width={20} height={18} />,
      subItems: [{ name: 'Cancelled orders', navigation: '' }],
    },
    { label: 'Financials', icon: <Finance width={24} height={13} /> },
    { label: 'Branding', icon: <Portrait width={18} height={18} /> },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../../../assets/images/zeepUpSidebar.png')} resizeMode='contain' />
        <Text style={styles.title}>Vendor - New Jersey</Text>
        <View style={styles.line} />
        <ScrollView>
          {drawerItems.map(({ label, icon, subItems }: DrawerMenuType) => (
            <View key={label} style={styles.itemContainer}>
              <TouchableOpacity onPress={() => handleItemPress(label)}>
                <View style={styles.drawerItem}>
                  {icon}
                  <Text style={styles.drawerItemText}>{label}</Text>
                  {hasSubItems({ subItems }) && (
                    <Text style={styles.drawerItemTextIcon}>
                      {isItemExpanded(label) ? '-' : '+'}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
              {isItemExpanded(label) &&
                subItems &&
                subItems.map((subItem: DrawerMenuSubItemType, index: number) => (
                  <TouchableOpacity key={index}>
                    <View style={styles.subItem}>
                      <Text style={styles.subItemText}>{subItem.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SidebarContent;
