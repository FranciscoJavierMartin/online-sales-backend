import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    let cities: CityEntity[] = await this.cacheManager.get<CityEntity[]>(
      `cities_state_${stateId}`,
    );

    if (!cities) {
      cities = await this.cityRepository.find({
        where: { stateId },
      });

      await this.cacheManager.set(`cities_state_${stateId}`, cities);
    }

    return cities;
  }
}
