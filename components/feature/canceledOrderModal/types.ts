import { IOrders } from '../../../interfaces/orders.interface';

export type CanceledOrderProps = {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
  order: IOrders;
  cancelModalMessage: string;
};
