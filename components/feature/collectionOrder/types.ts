import { IOrderDetails } from '../../../interfaces/orders.interface';

export type CollectionOrderProps = {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
  orderDetails: IOrderDetails;
};
