import { Test, TestingModule } from '@nestjs/testing';
import { VacunadosCovidController } from './vacunados-covid.controller';

describe('VacunadosCovidController', () => {
  let controller: VacunadosCovidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacunadosCovidController],
    }).compile();

    controller = module.get<VacunadosCovidController>(VacunadosCovidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
