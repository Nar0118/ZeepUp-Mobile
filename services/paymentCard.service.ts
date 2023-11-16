import { IFormCard } from '../components/feature/addCard/types';
import { IPaymentCard } from '../interfaces/paymentCard.interface';
import { ISuccessResponse } from '../interfaces/successResponse.interface';
import ApiBase, { ApiError } from './ApiBase';

export class PaymentCardService extends ApiBase<IFormCard> {
  public async getPaymentCards(): Promise<Array<IPaymentCard> | ApiError> {
    return await this.getAllAsync<Array<IPaymentCard>>('payment');
  }

  public async addPaymentCard(body: IFormCard): Promise<ISuccessResponse | ApiError> {
    return await this.postAsync<ISuccessResponse>(body, 'payment');
  }
}
