import { IBase } from './base.interface';
import { IItem } from './item.interface';
import { IUserResponse } from './user.interface';

export interface ICategory extends IBase {
  description: string;
  image: string;
  status: number;
  title: string;
  user_id: number;
  user?: IUserResponse;
  items?: Array<IItem>;
}
