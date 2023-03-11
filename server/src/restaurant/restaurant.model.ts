import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface RestaurantModel extends Base {}
export class RestaurantModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  phoneNumber: string;

  @prop()
  address: string;

  @prop()
  workingHours: string;

  @prop()
  deliveryNumber?: string;

  @prop()
  photo: string;
}
