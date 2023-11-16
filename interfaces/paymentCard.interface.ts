import { IBase } from './base.interface';

export interface IPaymentCard extends IBase {
  name_on_card: string;
  card_number: string;
  card_type: string;
  expiration_date: string;
  status: number;
  buyer_id: number;
}
