import { IBase } from './base.interface';

export interface IRating extends IBase {
  rating: number;
  comment: string;
  reply: string;
  status: number;
  order_number: string;
  name?: string;
  profile_photo_path?: string;
}

export interface IAddRating {
  rating: string;
  comment: string;
  order_number: string;
}
