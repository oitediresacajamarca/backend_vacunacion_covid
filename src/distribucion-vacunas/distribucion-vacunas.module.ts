import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaRepository } from './provincia.repository';
import { UnoEntity } from './uno.entity';
import { DistribucionVacunasController } from './distribucion-vacunas.controller';
import { DistritoRepository } from './distrito.repository';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';
import { EstablecimientosRepository } from './establecimientos.repository';
import { DistribucionRedRepository } from './distribucion-red.repository';
import { ConteoRapidoRepository } from './conteo-rapido.repository';
import { EnviosIpressRepository } from './envios-ipress.repository';
import { EnviosRedRepository } from './envios-red.repository';
import { StockIpressRepository } from './stock-ipress.repository';
@Module({
    imports: [TypeOrmModule.forFeature([UnoEntity,ProvinciaRepository,DistritoRepository,DistribucionIpressRepository,
        EstablecimientosRepository,DistribucionRedRepository,ConteoRapidoRepository,EnviosIpressRepository,EnviosRedRepository,
    StockIpressRepository])],
    providers: [],
    controllers: [DistribucionVacunasController]   
})
export class DistribucionVacunasModule {}
