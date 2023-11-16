import { IOrderDetails, IOrders } from '../interfaces/orders.interface';
import { ISuccessResponse } from '../interfaces/successResponse.interface';
import ApiBase, { ApiError } from './ApiBase';

export class OrdersService extends ApiBase<any> {
  public async getOrders(): Promise<Array<IOrders> | ApiError> {
    return await this.getAllAsync<Array<IOrders>>('orders');
  }
  public async getCancelledOrders(): Promise<Array<IOrders> | ApiError> {
    return await this.getAllAsync<Array<IOrders>>('orders/cancelled');
  }
  public async getOrderDetails(orderNumber: string): Promise<IOrderDetails | ApiError> {
    return await this.getAllAsync<IOrderDetails>(`orders/${orderNumber}`);
  }
  public async cancelOrder(orderNumber: string): Promise<ISuccessResponse | ApiError> {
    return await this.postAsync<ISuccessResponse>({}, `orders/cancel/${orderNumber}`);
  }
}
