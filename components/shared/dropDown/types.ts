import { ViewStyle } from 'react-native';
import { ValueType } from 'react-native-dropdown-picker';

export type DropdownProps = {
  item: Array<DropdownMenuItem>;
  placeholderText?: string;
  icon?: JSX.Element;
  dropdownStyle?: ViewStyle;
  onChange: (value: string) => void;
  value?: string;
  disabled?: boolean;
};

export type DropdownMenuItem = {
  label: string;
  value: string;
};
