import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeguimientoVacunacionEntity } from './seguimiento-vacunacion.entity';
import { SeguimientoVacunacionController } from './seguimiento-vacunacion/seguimiento-vacunacion.controller';

@Module({
    imports:[TypeOrmModule.forFeature([SeguimientoVacunacionEntity],'default')],
    controllers:[SeguimientoVacunacionController]
})
export class SeguimientoVacunacionModule {
    
}
