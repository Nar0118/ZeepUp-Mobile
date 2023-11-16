import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { IFilter } from '../../../interfaces/filter.interface';
import { FilterProps } from './types';

import { getStyles } from './styles';

const Filter = ({ title, options, onChange, value }: FilterProps): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.optionContainer}>
        {options.map((option: IFilter) => (
          <TouchableOpacity
            key={option.label}
            style={[styles.option, value === option.value && styles.selectedOption]}
            onPress={() => onChange(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Filter;
