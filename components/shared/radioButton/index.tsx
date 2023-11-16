import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RadioButtonProps } from './types';

import { getStyles } from './styles';

const RadioButton = ({ handleSelect, option, selectedSort }: RadioButtonProps): JSX.Element => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={styles.optionContainer} onPress={() => handleSelect(option.key)}>
      <View
        style={[styles.radioCircle, selectedSort === option.key ? styles.radioCircleActive : null]}
      >
        {selectedSort === option.key && <View style={styles.selectedOption} />}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
