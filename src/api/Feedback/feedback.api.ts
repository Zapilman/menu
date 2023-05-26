import { IApiService } from '../apiService.interface';
import type { TFeedback } from './feedback.types';

export class FeedbackApi {
  service: IApiService;
  route = '/review';

  constructor(service: IApiService) {
    this.service = service;
  }

  async createFeedback(feedback: TFeedback) {
    return await this.service.post<string>(this.route, feedback);
  }
}
