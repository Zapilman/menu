import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get(':id')
  async get(@Param('id') id: string) {
    return 'restaurant';
  }

  @Post(':id/menu')
  async getWithMenu(@Param('id') id: string, @Body() body: { limit: number }) {
    return this.restaurantService.findWithMenu({ id, limit: body.limit });
  }

  @UseInterceptors(FileInterceptor('photo'))
  @Post()
  async create(
    @Body() dto: CreateRestaurantDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.restaurantService.create({ ...dto, photo: file });
  }
}
