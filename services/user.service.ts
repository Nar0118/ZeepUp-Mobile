import { ISuccessResponse } from '../interfaces/successResponse.interface';
import { IUpdateUserData } from '../interfaces/user.interface';
import ApiBase, { ApiError } from './ApiBase';

export class UserService extends ApiBase<Partial<IUpdateUserData>> {
  public async updateUserData(
    body: Partial<IUpdateUserData>,
  ): Promise<ISuccessResponse | ApiError> {
    return await this.patchAllAsync<ISuccessResponse>(body, 'user');
  }
}
