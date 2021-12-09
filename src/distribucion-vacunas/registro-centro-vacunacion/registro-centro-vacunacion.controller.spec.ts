import { Test, TestingModule } from '@nestjs/testing';
import { RegistroCentroVacunacionController } from './registro-centro-vacunacion.controller';

describe('RegistroCentroVacunacionController', () => {
  let controller: RegistroCentroVacunacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroCentroVacunacionController],
    }).compile();

    controller = module.get<RegistroCentroVacunacionController>(RegistroCentroVacunacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
