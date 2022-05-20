import { Test, TestingModule } from '@nestjs/testing';
import { ActualizacionesService } from './actualizaciones.service';

describe('ActualizacionesService', () => {
  let service: ActualizacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualizacionesService],
    }).compile();

    service = module.get<ActualizacionesService>(ActualizacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
