import { CardCategory } from '../../../screens/payments/types';

export interface CardType {
  cardName: string;
  cardNumber: string;
  cardType: CardCategory;
  expirationDate: string;
  status: string;
  createdAt: string;
  action: string;
}
