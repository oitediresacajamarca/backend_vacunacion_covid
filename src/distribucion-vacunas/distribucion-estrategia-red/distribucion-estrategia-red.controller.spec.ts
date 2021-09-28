import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionEstrategiaRedController } from './distribucion-estrategia-red.controller';

describe('DistribucionEstrategiaRedController', () => {
  let controller: DistribucionEstrategiaRedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionEstrategiaRedController],
    }).compile();

    controller = module.get<DistribucionEstrategiaRedController>(DistribucionEstrategiaRedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
