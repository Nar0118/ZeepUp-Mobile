import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Close from '../../../assets/images/icons/closePink.svg';
import { BottomModal } from '../../shared/bottomModal';
import Button from '../../shared/button';
import { RatingOptionTypes, SortModalProps } from './types';
import RadioButton from '../../shared/radioButton';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

export const PriceModal = ({
  openModal,
  setOpenModal,
  setFiltersData,
}: SortModalProps): JSX.Element => {
  const styles = getStyles();

  const [selectedSort, setSelectedSort] = useState<string>('');

  const sortOptions: Array<RatingOptionTypes> = [
    {
      key: '5',
      text: '0-5%',
    },
    {
      key: '10',
      text: '0-10%',
    },
    {
      key: '15',
      text: '0-15%',
    },
    {
      key: '25',
      text: '0-25%',
    },
    {
      key: '50',
      text: '0-50%',
    },
  ];

  const handleSelect = (key: string): void => {
    setSelectedSort(key);
  };

  const handleClear = (): void => {
    setSelectedSort('');
  };

  const handleApply = (): void => {
    setFiltersData((prevState) => ({
      ...prevState,
      price: selectedSort,
    }));
    setOpenModal(false);
  };

  return (
    <BottomModal modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.modalContainer}>
        <View style={styles.headerPart}>
          <View style={{ width: 20 }} />
          <Text style={styles.title}>Price</Text>
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
                <Text style={styles.optionText}>{option.text}</Text>
              </View>
              <Text style={styles.optionText}>0</Text>
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
