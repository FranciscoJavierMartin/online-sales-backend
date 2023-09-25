import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { ApiParam } from '@nestjs/swagger';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @ApiParam({ name: 'stateId' })
  @Get('/:stateId')
  async getAllCitiesByStateId(
    @Param('stateId') stateId: number,
  ): Promise<CityEntity[]> {
    console.log(stateId);
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}
