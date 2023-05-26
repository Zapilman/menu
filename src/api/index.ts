import { FeedbackApi } from './Feedback';
import { MenuApi } from './Menu';
import { RestaurantApi } from './Restaurant/restaurant.api';
import ApiService from './apiService';

class API {
  static Feedback = new FeedbackApi(ApiService);
  static Menu = new MenuApi(ApiService);
  static Restaurant = new RestaurantApi(ApiService);
}

export default API;
