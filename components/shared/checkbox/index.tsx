import React from 'react';
import { CheckBox } from 'react-native-elements';
import { CheckboxProps } from './types';

export const Checkbox = ({
  checkedIcon,
  uncheckedIcon,
  handleCheckboxToggle,
  checkboxStates,
}: CheckboxProps): JSX.Element => {
  return (
    <CheckBox
      checked={checkboxStates}
      onPress={handleCheckboxToggle}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      containerStyle={{
        margin: 0,
        padding: 0,
      }}
    />
  );
};
