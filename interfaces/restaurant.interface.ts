import { ICuisine } from './cuisine.interface';
import { IItem } from './item.interface';
import { IMenu } from './menu.interface';
import { IRating } from './rating.interface';
import { IUserResponse } from './user.interface';

export interface IRestaurantInfo {
  groupedItems: Record<string, Array<IItem>>;
  vendor: IUserResponse;
  cuisines: Array<ICuisine>;
  menus: Array<IMenu>;
  menu_array: Record<string, IMenuArray>;
  allItems: Array<IItem>;
  ratings: Array<IRating>;
  vendorRating: {
    totalRating: number;
    avg: number;
  };
  orders: Array<{ order_number: string }>;
}

export interface IMenuArray {
  menuId: number;
  menuTitle: string;
  menu_price: number;
  orig_price: number;
  expiry_date: string;
  items: Array<{
    id: null;
    name: null;
    menu_price: null;
    image: null;
    expire_date: null;
    item_description: null;
  }>;
}
