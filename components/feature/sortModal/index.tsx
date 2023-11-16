import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BottomModal } from '../../shared/bottomModal';
import Button from '../../shared/button';
import RadioButton from '../../shared/radioButton';
import { OptionTypes, SortModalProps } from './types';
import Close from '../../../assets/images/icons/closePink.svg';
import { CategorySort } from '../../../enums/categorySort.enum';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

export const SortModal = ({ openModal, setOpenModal, setSort }: SortModalProps): JSX.Element => {
  const styles = getStyles();

  const [selectedSort, setSelectedSort] = useState<string>('popularity');

  const sortOptions: Array<OptionTypes> = [
    { key: CategorySort.POPULARITY, text: 'Popularity' },
    { key: CategorySort.AVERAGE_RATING, text: 'Average Rating' },
    { key: CategorySort.NEWNESS, text: 'Newest' },
    { key: CategorySort.PRICE_LOW_TO_HIGH, text: 'Price: Low to High' },
    { key: CategorySort.PRICE_HIGH_TO_LOW, text: 'Price: High to Low' },
  ];

  const handleSelect = (key: string): void => {
    setSelectedSort(key);
  };

  const handleClear = (): void => {
    setSort('');
    setSelectedSort('');
  };

  const handleApply = (): void => {
    setSort(selectedSort);
    setOpenModal(false);
  };

  return (
    <BottomModal modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.modalContainer}>
        <View style={styles.headerPart}>
          <View style={{ width: 20 }} />
          <Text style={styles.title}>Sort</Text>
          <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
            <Close width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.infoContainer}>
          {sortOptions.map((option: OptionTypes, index: number) => (
            <View key={index} style={styles.radioItem}>
              <Text style={styles.optionText}>{option.text}</Text>
              <RadioButton
                selectedSort={selectedSort}
                option={option}
                handleSelect={handleSelect}
              />
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
