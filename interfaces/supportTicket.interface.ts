import { IOrdersFullData } from './orders.interface';
import { IUserResponse } from './user.interface';

export interface ISupportTicket {
  orders: Array<IOrdersFullData>;
  restaurants: Array<IUserResponse>;
}

export interface IAddSupportTicket {
  selectedoption: string;
  typeofrequest: string;
  details: string;
}
