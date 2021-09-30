import { Test, TestingModule } from '@nestjs/testing';
import { RecepcionAnexosService } from './recepcion-anexos.service';

describe('RecepcionAnexosService', () => {
  let service: RecepcionAnexosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepcionAnexosService],
    }).compile();

    service = module.get<RecepcionAnexosService>(RecepcionAnexosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
