import { IFilter } from '../../../interfaces/filter.interface';

export interface FilterProps {
  title: string;
  options: Array<IFilter>;
  value: string;
  onChange: (value: string) => void;
}
