import { Dispatch, SetStateAction } from 'react';
import { IFiltersData } from '../../../screens/listCategories/types';

export type SortModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  setFiltersData: Dispatch<SetStateAction<IFiltersData>>;
};

export type RatingOptionTypes = {
  key: string;
  text: string;
  rate: string;
  icon: JSX.Element;
};
