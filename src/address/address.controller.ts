import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  @ApiBody({ type: CreateAddressDto })
  async create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    return this.addressService.create(createAddressDto, userId);
  }
}
