export type OrderTypes = {
  id: string;
  customerName: string;
  collectionTime: string;
  paymentMethod: string;
  orderTime: string;
  total: string;
  imageUrl: string;
  orderStatus: string;
};

export const ordersData: Array<OrderTypes> = [
  {
    id: 'ZeeUp-0041',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Pending',
  },
  {
    id: 'ZeeUp-0042',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Collected',
  },
  {
    id: 'ZeeUp-0043',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Collected',
  },
  {
    id: 'ZeeUp-0044',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Collected',
  },
];

export const canceledOrdersData: Array<OrderTypes> = [
  {
    id: 'ZeeUp-0041',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Cancelled',
  },
  {
    id: 'ZeeUp-0042',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Cancelled',
  },
  {
    id: 'ZeeUp-0043',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Cancelled',
  },
  {
    id: 'ZeeUp-0044',
    customerName: 'Elisa',
    collectionTime: '11:45:50',
    paymentMethod: 'Stripe',
    orderTime: '09:30:00',
    total: '$5.50',
    imageUrl: 'https://link-to-your-image.com/coffee.jpg',
    orderStatus: 'Cancelled',
  },
];
