import { Test, TestingModule } from '@nestjs/testing';
import { MovimientoVacunasComplService } from './movimiento-vacunas-compl.service';

describe('MovimientoVacunasComplService', () => {
  let service: MovimientoVacunasComplService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimientoVacunasComplService],
    }).compile();

    service = module.get<MovimientoVacunasComplService>(MovimientoVacunasComplService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
