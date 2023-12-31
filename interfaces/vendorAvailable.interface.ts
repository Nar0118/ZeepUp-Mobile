import { IBase } from './base.interface';

export interface IVendorAvailable extends IBase {
  vendor_id: number;
  status: number;
  sunday_open: string;
  sunday_close: string;
  monday_open: string;
  monday_close: string;
  tuesday_open: string;
  tuesday_close: string;
  wednesday_open: string;
  wednesday_close: string;
  thursday_open: string;
  thursday_close: string;
  friday_open: string;
  friday_close: string;
  saturday_open: string;
  saturday_close: string;
}
