import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosConProblemasDigitacionService } from './registros-con-problemas-digitacion.service';

describe('RegistrosConProblemasDigitacionService', () => {
  let service: RegistrosConProblemasDigitacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrosConProblemasDigitacionService],
    }).compile();

    service = module.get<RegistrosConProblemasDigitacionService>(RegistrosConProblemasDigitacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
