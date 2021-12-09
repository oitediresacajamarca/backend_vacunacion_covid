import { Test, TestingModule } from '@nestjs/testing';
import { CentroVacunacionController } from './centro-vacunacion.controller';

describe('CentroVacunacionController', () => {
  let controller: CentroVacunacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentroVacunacionController],
    }).compile();

    controller = module.get<CentroVacunacionController>(CentroVacunacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
