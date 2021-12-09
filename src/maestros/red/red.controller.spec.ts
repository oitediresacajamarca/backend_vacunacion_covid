import { Test, TestingModule } from '@nestjs/testing';
import { RedController } from './red.controller';

describe('RedController', () => {
  let controller: RedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedController],
    }).compile();

    controller = module.get<RedController>(RedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
