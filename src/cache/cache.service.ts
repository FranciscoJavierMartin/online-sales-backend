import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getCache<T>(key: string, getData: () => Promise<T[]>): Promise<T[]> {
    let data: T[] = await this.cacheManager.get<T[]>(key);

    if (!data) {
      data = await getData();
      await this.cacheManager.set(key, data);
    }

    return data;
  }
}
