import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get(':id')
  async get(@Param('id') id: string) {
    return 'restaurant';
  }

  @Post()
  async create(@Body() dto: CreateRestaurantDto) {
    return this.restaurantService.create(dto);
  }
}
