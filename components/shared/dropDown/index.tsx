import React from 'react';
import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Placeholder } from '../customPlaceholder';
import { DropdownMenuItem, DropdownProps } from './types';
import ArrowDownSvg from '../../../assets/images/icons/arrowDown.svg';
import ArrowUpSvg from '../../../assets/images/icons/arrowUp.svg';

import { getStyles } from './styles';

export const ArrowDown = (): JSX.Element => {
  return (
    <View>
      <ArrowDownSvg width={20} height={20} />
    </View>
  );
};

export const ArrowUp = (): JSX.Element => {
  return (
    <View>
      <ArrowUpSvg width={20} height={20} />
    </View>
  );
};

export const DropdownMenu = ({
  item,
  placeholderText,
  icon,
  dropdownStyle,
  onChange,
  value,
  disabled
}: DropdownProps): JSX.Element => {
  const styles = getStyles();

  const itemsLength = item.length;
  return (
    <View style={[styles.container, icon && styles.containerWithIcon]}>
      {icon}
      <SelectDropdown
        dropdownStyle={[
          styles.dropdownMenuContainer,
          itemsLength == 1 && styles.dropdownMenuContainerSmall,
        ]}
        defaultValue={value}
        disabled={disabled}
        buttonTextStyle={styles.inputText}
        rowTextStyle={styles.text}
        buttonStyle={[styles.dropdown, dropdownStyle]}
        renderDropdownIcon={ArrowDown}
        searchPlaceHolder={(<Placeholder placeholderText={placeholderText} icon={icon} />) as any}
        data={item}
        onSelect={(item: DropdownMenuItem) => {
          onChange(item.value);
        }}
        defaultButtonText={placeholderText}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.value;
        }}
        rowTextForSelection={(item) => {
          return item.label;
        }}
      />
    </View>
  );
};
