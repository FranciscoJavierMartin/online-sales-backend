import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';

@ApiTags('state')
@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAll(): Promise<StateEntity[]> {
    return this.stateService.getAll();
  }
}
