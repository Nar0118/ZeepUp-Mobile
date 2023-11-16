import { ICategory } from '../interfaces/category.interface';
import { IRestaurantInfo } from '../interfaces/restaurant.interface';
import { IUserResponse } from '../interfaces/user.interface';
import ApiBase, { ApiError } from './ApiBase';

export class VendorsService extends ApiBase<any> {
  public async getVendors(
    filter?: string,
    isCategory?: boolean,
  ): Promise<Array<IUserResponse> | Array<ICategory> | ApiError> {
    const url = isCategory
      ? filter
        ? `vendors/category?${filter}`
        : 'vendors/category'
      : filter
      ? `vendors?${filter}`
      : 'vendors';

    return await this.getAllAsync<Array<IUserResponse>>(url);
  }

  public async getVendorById(id: number): Promise<IRestaurantInfo | ApiError> {
    return await this.getAsync<IRestaurantInfo>(id, `vendors`);
  }
}
