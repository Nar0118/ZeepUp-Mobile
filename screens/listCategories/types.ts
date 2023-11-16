import { ICategory } from '../../interfaces/category.interface';

export type RouteType = {
  List: {
    category: ICategory;
  };
};

export interface IFiltersData {
  rating: string;
  price: string;
  categories: Array<string>;
}
