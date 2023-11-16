export type OptionTypes = {
  key: string;
  text: string;
};

export const taxOption: Array<OptionTypes> = [
  { key: 'no', text: 'No' },
  { key: 'yes', text: 'Yes' },
];

export const taxType: Array<OptionTypes> = [
  { key: 'inherit', text: 'Inherit Local Tax' },
  { key: 'special', text: 'Special Tax' },
];
