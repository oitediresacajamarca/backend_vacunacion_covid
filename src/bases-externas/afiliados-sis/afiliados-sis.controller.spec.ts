import { Test, TestingModule } from '@nestjs/testing';
import { AfiliadosSisController } from './afiliados-sis.controller';

describe('AfiliadosSisController', () => {
  let controller: AfiliadosSisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AfiliadosSisController],
    }).compile();

    controller = module.get<AfiliadosSisController>(AfiliadosSisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
