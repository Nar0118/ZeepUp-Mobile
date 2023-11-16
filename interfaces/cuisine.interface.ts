import { IBase } from './base.interface';

export interface ICuisine extends IBase {
  status: number;
  title: string;
  vendor_id: number;
}
