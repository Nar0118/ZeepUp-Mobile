import { ISuccessResponse } from '../interfaces/successResponse.interface';
import { ISupportTicket } from '../interfaces/supportTicket.interface';
import ApiBase, { ApiError } from './ApiBase';

export class SupportTicketService extends ApiBase<FormData> {
  public async getSupportTicket(): Promise<ISupportTicket | ApiError> {
    return await this.getAllAsync<ISupportTicket>('user/support');
  }
  public async addSupportTicket(ticket: FormData): Promise<ISuccessResponse | ApiError> {
    return await this.postAsync<ISuccessResponse>(ticket, 'user/support', {
      'Content-Type': 'multipart/form-data',
    });
  }
}
