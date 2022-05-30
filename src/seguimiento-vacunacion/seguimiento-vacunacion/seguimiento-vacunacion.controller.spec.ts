import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoVacunacionController } from './seguimiento-vacunacion.controller';

describe('SeguimientoVacunacionController', () => {
  let controller: SeguimientoVacunacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguimientoVacunacionController],
    }).compile();

    controller = module.get<SeguimientoVacunacionController>(SeguimientoVacunacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
