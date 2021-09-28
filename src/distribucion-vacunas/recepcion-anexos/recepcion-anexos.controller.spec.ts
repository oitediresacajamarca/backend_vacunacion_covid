import { Test, TestingModule } from '@nestjs/testing';
import { RecepcionAnexosController } from './recepcion-anexos.controller';

describe('RecepcionAnexosController', () => {
  let controller: RecepcionAnexosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecepcionAnexosController],
    }).compile();

    controller = module.get<RecepcionAnexosController>(RecepcionAnexosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
