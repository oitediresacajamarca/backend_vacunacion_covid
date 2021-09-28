import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionRedIpressController } from './distribucion-red-ipress.controller';

describe('DistribucionRedIpressController', () => {
  let controller: DistribucionRedIpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionRedIpressController],
    }).compile();

    controller = module.get<DistribucionRedIpressController>(DistribucionRedIpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
