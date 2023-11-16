import { IBase } from './base.interface';
import { IItem } from './item.interface';
import { IRating } from './rating.interface';
import { IVendorAvailable } from './vendorAvailable.interface';

export interface IUser {
  name: string;
  email: string;
  phone: string;
  role: string;
  zipcode: string;
}

export interface IUserResponse extends IBase {
  name: string;
  manager_name?: string | null;
  email: string;
  email_verified_at: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zipcode: number | null;
  role: string;
  status: string;
  disable_restaurant: string;
  business_description: string | null;
  address: string | null;
  street_number: number | null;
  profile_photo_path: string | null;
  banner_photo_path: string | null;
  profile_photo_url: string;

  rating?: number;
  items?: Array<IItem>;
  ratings: Array<IRating>;
  vendorsAvailabilities?: IVendorAvailable;
}

export enum UserRole {
  BUYER = 'buyer',
  VENDOR = 'vendor',
}

export interface IUpdateUserData extends Omit<IUser, 'role' | 'email'> {
  current_password: string;
  password: string;
  password_confirmation: string;
}
