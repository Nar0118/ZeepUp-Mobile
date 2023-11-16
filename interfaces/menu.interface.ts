import { IBase } from './base.interface';

export interface IMenu extends IBase {
  title: string;
  menuid: number;
  itemid: number;
  name: string;
  category_id: number;
  cuisine_id: number;
  description: string;
  image: string;
  alergen_info: string;
  menu_status: number;
  discount: string;
  price: number;
  sale_price: null;
  date_range: string;
  quantity: string;
  promo: string;
  tax: string;
  tax_included: string;
  expire_date: string;
  availability: string;
  user_id: number;
  menu_price: number;
}
