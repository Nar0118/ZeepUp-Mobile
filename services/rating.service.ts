import { IAddRating } from '../interfaces/rating.interface';
import { ISuccessResponse } from '../interfaces/successResponse.interface';
import ApiBase, { ApiError } from './ApiBase';

export class RatingService extends ApiBase<IAddRating> {
  public async addRating(id: string, rating: IAddRating): Promise<ISuccessResponse | ApiError> {
    return await this.postAsync<ISuccessResponse>(rating, `rating/add/${id}`);
  }
}
