import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Restaurant } from './restaurant.model';

@Controller('restaurant')
export class RestaurantControler {
  @Get(':id')
  async get(@Param('id') id: string) {}

  @Post()
  async create(@Body() dto: Omit<Restaurant, '_id'>) {}
}
