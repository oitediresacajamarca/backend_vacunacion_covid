import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionVacunasController } from './distribucion-vacunas.controller';

describe('DistribucionVacunasController', () => {
  let controller: DistribucionVacunasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionVacunasController],
    }).compile();

    controller = module.get<DistribucionVacunasController>(DistribucionVacunasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
