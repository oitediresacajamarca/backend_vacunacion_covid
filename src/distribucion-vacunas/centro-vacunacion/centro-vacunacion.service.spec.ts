import { Test, TestingModule } from '@nestjs/testing';
import { CentroVacunacionService } from './centro-vacunacion.service';

describe('CentroVacunacionService', () => {
  let service: CentroVacunacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroVacunacionService],
    }).compile();

    service = module.get<CentroVacunacionService>(CentroVacunacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
