import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class MenuCategories {
  @prop()
  name: string;

  @prop({ type: () => [String] })
  value: string[];
}

export interface RestaurantModel extends Base {}
export class RestaurantModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  number: string;

  @prop()
  address: string;

  @prop()
  workingHours: string;

  @prop()
  deliveryNumber?: string;

  @prop()
  photo: string;

  @prop({ type: () => [MenuCategories] })
  categories: MenuCategories[];
}
