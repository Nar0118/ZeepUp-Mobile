import { Dispatch, SetStateAction } from 'react';

export type SortModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  setSort: Dispatch<SetStateAction<string>>;
};

export type OptionTypes = {
  key: string;
  text: string;
};
