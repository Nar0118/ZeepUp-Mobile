import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import useAsyncEffect from 'use-async-effect';
import Close from '../../../assets/images/icons/closePink.svg';
import { BottomModal } from '../../shared/bottomModal';
import IconInput from '../../shared/input';
import Button from '../../shared/button';
import { Checkbox } from '../../shared/checkbox';
import Search from '../../../assets/images/icons/search.svg';
import CheckboxInactive from '../../../assets/images/icons/checkboxInactive.svg';
import CheckboxActive from '../../../assets/images/icons/checkboxActive.svg';
import { CategoryService } from '../../../services/category.service';
import { SortModalProps } from './types';
import { ICategory } from '../../../interfaces/category.interface';
import { ApiError } from '../../../services/ApiBase';
import { ToastEnum } from '../../../enums/toast.enum';

import { getStyles } from './styles';
import Colors from '../../../constants/Colors';

export const CategoriesModal = ({
  openModal,
  setOpenModal,
  setFiltersData,
  categoryId,
}: SortModalProps): JSX.Element => {
  const toast = useToast();
  const categoryService = new CategoryService();
  const styles = getStyles();

  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({
    [categoryId]: true,
  });

  const checkedIcon = <CheckboxActive width={22} height={22} />;
  const uncheckedIcon = <CheckboxInactive width={22} height={22} />;

  const getCategories = async (): Promise<void> => {
    const data: Array<ICategory> | ApiError = await categoryService.getCategory();

    if ('errorMessage' in data) {
      toast.show(`${data.errorMessage}`, {
        type: ToastEnum.ERROR,
      });

      return;
    }

    setCategories(data as Array<ICategory>);
  };

  useAsyncEffect(async () => {
    await getCategories();
  }, []);

  const handleCheckboxToggle = (key: number): void => {
    setCheckboxStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClear = (): void => {
    setCheckboxStates({
      [categoryId]: true,
    });
  };

  const handleApply = (): void => {
    const categories = Object.entries(checkboxStates)
      .map(([key, value]) => (value ? key : undefined))
      .filter(Boolean);

    setFiltersData((prevState) => ({
      ...prevState,
      categories: categories as Array<string>,
    }));
    setOpenModal(false);
  };

  return (
    <BottomModal modalVisible={openModal} setModalVisible={setOpenModal}>
      <View style={styles.modalContainer}>
        <View style={styles.headerPart}>
          <View style={{ width: 20 }} />
          <Text style={styles.title}>Categories</Text>
          <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
            <Close width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchPart}>
            <View style={styles.searchIcon}>
              <Search width={15} height={15} />
            </View>
            <IconInput
              placeholder='Search your category'
              style={styles.inputStyle}
              placeholderTextColor={Colors.light.placeholderGrey}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <ScrollView style={{ maxHeight: 180 }}>
            {categories.map((category) => (
              <View key={category.id} style={styles.radioItem}>
                <View style={styles.radioContainer}>
                  <Checkbox
                    checkedIcon={checkedIcon}
                    uncheckedIcon={uncheckedIcon}
                    handleCheckboxToggle={() => handleCheckboxToggle(category.id)}
                    checkboxStates={checkboxStates[category.id] || false}
                  />
                  <Text style={styles.optionText}>{category.title}</Text>
                </View>
                <Text style={styles.optionText}>{category.items?.length}</Text>
              </View>
            ))}
          </ScrollView>
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
