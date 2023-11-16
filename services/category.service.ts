import { ICategory } from '../interfaces/category.interface';
import ApiBase, { ApiError } from './ApiBase';

export class CategoryService extends ApiBase<any> {
  public async getCategory(): Promise<Array<ICategory> | ApiError> {
    return await this.getAllAsync<Array<ICategory>>('categories');
  }
}
