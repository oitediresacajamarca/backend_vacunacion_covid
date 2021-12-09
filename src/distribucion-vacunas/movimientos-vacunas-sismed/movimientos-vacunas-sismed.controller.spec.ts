import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosVacunasSismedController } from './movimientos-vacunas-sismed.controller';

describe('MovimientosVacunasSismedController', () => {
  let controller: MovimientosVacunasSismedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimientosVacunasSismedController],
    }).compile();

    controller = module.get<MovimientosVacunasSismedController>(MovimientosVacunasSismedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
