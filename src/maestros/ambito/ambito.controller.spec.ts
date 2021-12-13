import { Test, TestingModule } from '@nestjs/testing';
import { AmbitoController } from './ambito.controller';

describe('AmbitoController', () => {
  let controller: AmbitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbitoController],
    }).compile();

    controller = module.get<AmbitoController>(AmbitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
