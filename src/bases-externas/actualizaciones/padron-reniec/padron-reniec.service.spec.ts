import { Test, TestingModule } from '@nestjs/testing';
import { PadronReniecService } from './padron-reniec.service';

describe('PadronReniecService', () => {
  let service: PadronReniecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadronReniecService],
    }).compile();

    service = module.get<PadronReniecService>(PadronReniecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
