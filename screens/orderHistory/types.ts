export interface OrderHistoryType {
  orderId: string;
  paymentType: string;
  buyerName: string;
  itemName: string;
  orderDate: string;
  status: string;
  dateAndTime: string;
  tax: string;
  total: string;
}

export const fakeData: Array<OrderHistoryType> = [
  {
    orderId: 'ZeeUp-0045',
    paymentType: 'Stripe',
    buyerName: 'Elisa Bianchi',
    itemName: 'Chicken Burger',
    orderDate: '2023-05-23  09:30:00',
    status: 'Collected',
    dateAndTime: '2023-05-23  11:45:50',
    tax: '0',
    total: '$1.77',
  },
  {
    orderId: 'ZeeUp-0046',
    paymentType: 'Stripe',
    buyerName: 'Elisa Bianchi',
    itemName: 'Chicken Burger',
    orderDate: '2023-05-23  09:30:00',
    status: 'Collected',
    dateAndTime: '2023-05-23  11:45:50',
    tax: '0',
    total: '$1.77',
  },
];
