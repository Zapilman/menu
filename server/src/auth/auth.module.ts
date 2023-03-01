import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypegooseModule } from 'nestjs-typegoose';
import { getJwtConfig } from 'src/configs/jwt.config';
import { AuthController } from './auth.controller';
import { AuthModel } from './auth.model';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      { typegooseClass: AuthModel, schemaOptions: { collection: 'Auth' } },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigModule],
      useFactory: getJwtConfig,
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
