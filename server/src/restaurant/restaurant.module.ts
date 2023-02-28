import { Module } from '@nestjs/common';
import { RestaurantControler } from './restaurant.controller';
@Module({
  controllers: [RestaurantControler],
})
export class RestaurantModule {}
