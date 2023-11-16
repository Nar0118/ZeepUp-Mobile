import { CardType } from '../../components/feature/manageCard/types';

export enum CardCategory {
  MASTERCARD = 'masterCard',
  VISA = 'visa',
  AMERICAN_EXPRESS = 'americanExpress',
}

export const fakeCard: Array<CardType> = [
  {
    cardName: 'Elisa Bianchi',
    cardNumber: '1234 0000 0000 0000',
    cardType: CardCategory.MASTERCARD,
    expirationDate: 'mm/yyyy',
    status: 'Active',
    createdAt: '2023-05-23',
    action: '',
  },
];
