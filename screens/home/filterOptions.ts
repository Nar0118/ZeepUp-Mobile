import { IFilter } from '../../interfaces/filter.interface';

export const priceOption: Array<IFilter> = [
  {
    label: '0-5%',
    value: '5',
  },
  {
    label: '0-10%',
    value: '10',
  },
  {
    label: '0-25%',
    value: '25',
  },
  {
    label: '0-50%',
    value: '50',
  },
  {
    label: '0-75%',
    value: '75',
  },
];

export const ratingOption: Array<IFilter> = [
  {
    label: 'All',
    value: '',
  },
  {
    label: '4.5+',
    value: '4.5',
  },
  {
    label: '4.0+',
    value: '4.0',
  },
  {
    label: '3.5+',
    value: '3.5',
  },
  {
    label: '3.0+',
    value: '3.0',
  },
];

export const offerExpireOption: Array<IFilter> = [
  {
    label: '1 day',
    value: '1',
  },
  {
    label: '3 days',
    value: '3',
  },
  {
    label: '1 week',
    value: '7',
  },
  {
    label: 'more than 1 week',
    value: 'more',
  },
];
