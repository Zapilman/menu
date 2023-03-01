import { Injectable } from '@nestjs/common/decorators';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantModel } from './restaurant.model';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(RestaurantModel)
    private readonly restaurantModel: ModelType<RestaurantModel>,
  ) {}

  async create(
    dto: CreateRestaurantDto,
  ): Promise<DocumentType<RestaurantModel>> {
    return this.restaurantModel.create(dto);
  }
}
