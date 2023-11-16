import { IItemResponse } from '../interfaces/item.interface';
import ApiBase, { ApiError } from './ApiBase';

export class ItemsService extends ApiBase<any> {
  public async getItemsById(id: number): Promise<IItemResponse | ApiError> {
    return await this.getAsync<IItemResponse>(id, 'items');
  }
}
