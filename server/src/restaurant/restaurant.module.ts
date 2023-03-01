import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { RestaurantController } from './restaurant.controller';
import { RestaurantModel } from './restaurant.model';
import { RestaurantService } from './restaurant.service';
@Module({
  controllers: [RestaurantController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: RestaurantModel,
        schemaOptions: { collection: 'Restaurant' },
      },
    ]),
  ],
  providers: [RestaurantService],
})
export class RestaurantModule {}
