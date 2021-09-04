import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaRepository } from './provincia.repository';
import { UnoEntity } from './uno.entity';
import { DistribucionVacunasController } from './distribucion-vacunas.controller';
import { DistritoRepository } from './distrito.repository';
import { DistribucionIpressEntity } from './distribucion-ipress.entity';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';
import { EstablecimientosRepository } from './establecimientos.repository';


@Module({
    imports: [TypeOrmModule.forFeature([UnoEntity,ProvinciaRepository,DistritoRepository,DistribucionIpressRepository,EstablecimientosRepository])],
    providers: [],
    controllers: [DistribucionVacunasController]
 
    
})
export class DistribucionVacunasModule {}
