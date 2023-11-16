import { IUserResponse } from './user.interface';

export interface IOrders {
  id: number;
  total: number;
  status: string;
  payment_type: string;
  creditCardTime: string;
  order_number: string;
  collected: string;
  delivery_date: string;
  delivery_time: string;
  vendorName: string;
  vendorImage: string;
}

export interface IOrdersFullData {
  id: number;
  userid: number;
  vendorid: number;
  total: number;
  status: string;
  payment_type: string;
  transactiontime: string;
  creditcardtime: string;
  paypal_id: null;
  card4: number;
  cardtype: string;
  strip_id: string;
  order_number: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
  delivery_date: string;
  delivery_time: string;
  collected: string;
  collectiontime: string;
  refund_id: string;
  refund_time: string;
  refund_amount: string;
  refund_status: string;
  seen_by_vendor: number;
  seen_by_buyer: number;
}

export interface IOrderDetails {
  items: Array<IOrderDetailItem>;
  vendor: IUserResponse;
  order: IOrdersFullData;
}

export interface IOrderDetailItem {
  title: string;
  unit_price: number;
  quantity: number;
  total_price: number;
  image: string;
}
