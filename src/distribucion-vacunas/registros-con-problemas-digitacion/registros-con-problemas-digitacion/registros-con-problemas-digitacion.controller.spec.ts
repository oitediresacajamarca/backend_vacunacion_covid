import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosConProblemasDigitacionController } from './registros-con-problemas-digitacion.controller';

describe('RegistrosConProblemasDigitacionController', () => {
  let controller: RegistrosConProblemasDigitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrosConProblemasDigitacionController],
    }).compile();

    controller = module.get<RegistrosConProblemasDigitacionController>(RegistrosConProblemasDigitacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
