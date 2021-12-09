import { Test, TestingModule } from '@nestjs/testing';
import { MovimientoVacunasComplController } from './movimiento-vacunas-compl.controller';

describe('MovimientoVacunasComplController', () => {
  let controller: MovimientoVacunasComplController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimientoVacunasComplController],
    }).compile();

    controller = module.get<MovimientoVacunasComplController>(MovimientoVacunasComplController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
