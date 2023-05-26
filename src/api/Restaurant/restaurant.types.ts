import type { TMenu } from 'src/types/Menu';

export interface TGetRestaurantWithMenuResponse {
  _id: string;
  name: string;
  menu: TMenu[];
}
