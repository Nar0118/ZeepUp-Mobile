import { IItem } from '../../../interfaces/item.interface';
import { IUserResponse } from '../../../interfaces/user.interface';

export type StoreCategoryFoodProps = {
  data?: StoreCategoryFoodData;
  navigateRouteName?: string;
  fromRestaurantMenu?: boolean;
  fromFollowing?: boolean;
  onLikePress?: (e: number) => void;
  index?: number;
  vendor?: IUserResponse;
  item: IItem;
};

export type StoreCategoryFoodData = {
  logo: string;
  name: string;
  rate: number;
  foodName: string;
  foodDescription: string;
  price: number;
  image: string;
  liked?: boolean;
  id?: number;
};
