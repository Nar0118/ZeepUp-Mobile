import { IImage } from './image.interface';

export interface IRegisterFrom {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  password: string;
  password_confirmation: string;
  checkbox: boolean;
}

export interface IRegisterVendorBusinessForm {
  name: string;
  business_description: string;
  address: string;
  street_number: string;
  state: string;
  city: string;
  zipcode: string;
  country: string;
  profileImage: IImage | string;
  bannerImage: IImage | string;
  email: string;
  phone: string;
  manager_name: string;
  password: string;
  password_confirmation: string;
  checkbox: boolean;
}
