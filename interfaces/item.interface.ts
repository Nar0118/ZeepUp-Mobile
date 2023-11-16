import { IBase } from './base.interface';
import { ICategory } from './category.interface';
import { ICuisine } from './cuisine.interface';
import { IUserResponse } from './user.interface';
import { IVendorAvailable } from './vendorAvailable.interface';

export interface IItem extends IBase {
  name: string;
  category_id: number;
  cuisine_id: number;
  description: string;
  image: string;
  alergen_info: string;
  menu_status: number;
  discount: number;
  price: number;
  sale_price: string | null;
  date_range: string;
  quantity: string;
  promo: string;
  tax: string;
  tax_included: string;
  expire_date: string;
  availability: string;
  user_id: number;

  category?: ICategory;
  cuisine?: ICuisine;
  user?: IUserResponse;
}

export interface IItemResponse {
  items: IItem;
  itemsChildren: Array<IItem>;
  vendorsAvailable: IVendorAvailable;
}
