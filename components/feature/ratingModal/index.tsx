import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Close from '../../../assets/images/icons/closePink.svg';
import { BottomModal } from '../../shared/bottomModal';
import Button from '../../shared/button';
import { RatingOptionTypes, SortModalProps } from './types';
import RadioButton from '../../shared/radioButton';
import FiveLeaf from '../../../assets/images/icons/fiveLeaf.svg';
import FourLead from '../../../assets/images/icons/fourLeaf.svg';
import ThreeLeaf from '../../../assets/images/icons/threeLeaf.svg';
import TwoLeaf from '../../../assets/images/icons/twoLeaf.svg';
import OneLeaf from '../../../assets/images/icons/oneLeaf.svg';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

export const RatingModal = ({
  openModal,
  setOpenModal,
  setFiltersData,
}: SortModalProps): JSX.Element => {
  const styles = getStyles();

  const [selectedSort, setSelectedSort] = useState<string>('');

  const sortOptions: Array<RatingOptionTypes> = [
    {
      key: '',
      text: 'Popularity',
      rate: 'All',
      icon: <FiveLeaf width={100} height={20} />,
    },
    {
      key: '4.5',
      text: 'Average Rating',
      rate: '4.5+',
      icon: <FourLead width={100} height={20} />,
    },
    { key: '4.0', text: 'Newest', rate: '4.0+', icon: <ThreeLeaf width={100} height={20} /> },
    {
      key: '3.5',
      text: 'Price: Low to High',
      rate: '3.5+',
      icon: <TwoLeaf width={100} height={20} />,
    },
    {
      key: '3.0',
      text: 'Price: High to Low',
      rate: '3.0+',
      icon: <OneLeaf width={100} height={20} />,
    },
  ];

  const handleSelect = (key: string): void => {
    setSelectedSort(key);
  };

  const handleApply = (): void => {
    setFiltersData((prevState) => ({
      ...prevState,
      rating: selectedSort,
    }));
    setOpenModal(false);
  };

  const handleClear = (): void => {
    setSelectedSort('');
  };

  return (
    <BottomModal modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.modalContainer}>
        <View style={styles.headerPart}>
          <View style={{ width: 20 }} />
          <Text style={styles.title}>Rating</Text>
          <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
            <Close width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.infoContainer}>
          {sortOptions.map((option: RatingOptionTypes, index: number) => (
            <View key={index} style={styles.radioItem}>
              <View style={styles.radioContainer}>
                <RadioButton
                  selectedSort={selectedSort}
                  option={option}
                  handleSelect={handleSelect}
                />
                {option.icon}
              </View>
              <Text style={styles.optionText}>{option.rate}</Text>
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <Button
              title='Clear All'
              onPress={handleClear}
              width={115}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.white}
              textColor={Colors.light.defaultPink}
            />
            <Button
              title='Apply'
              onPress={handleApply}
              width={115}
              height={30}
              fontSize={10}
              backgroundColor={Colors.light.defaultPink}
              textColor={Colors.light.white}
            />
          </View>
        </View>
      </View>
    </BottomModal>
  );
};
