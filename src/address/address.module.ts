import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from '@/city/city.module';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressEntity } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), CityModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
