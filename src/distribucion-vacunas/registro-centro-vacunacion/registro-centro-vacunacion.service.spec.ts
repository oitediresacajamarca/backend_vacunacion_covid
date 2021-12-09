import { Test, TestingModule } from '@nestjs/testing';
import { RegistroCentroVacunacionService } from './registro-centro-vacunacion.service';

describe('RegistroCentroVacunacionService', () => {
  let service: RegistroCentroVacunacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroCentroVacunacionService],
    }).compile();

    service = module.get<RegistroCentroVacunacionService>(RegistroCentroVacunacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
