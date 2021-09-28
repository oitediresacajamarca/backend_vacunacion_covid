import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaRepository } from './provincia.repository';

import { DistribucionVacunasController } from './distribucion-vacunas.controller';
import { DistritoRepository } from './distrito.repository';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';
import { EstablecimientosRepository } from './establecimientos.repository';
import { DistribucionRedRepository } from './distribucion-red.repository';
import { ConteoRapidoRepository } from './conteo-rapido.repository';
import { EnviosIpressRepository } from './envios-ipress.repository';
import { EnviosRedRepository } from './envios-red.repository';
import { StockIpressRepository } from './stock-ipress.repository';
import { MovimientosSismedRepository } from './movimientos-sismed.repository';
import { MovimientosSismedEntity } from './movimientos-sismed.entity';
import { LoteVacunaRepository } from './lote-vacuna.repository';
import { DistribucionEstrategiaRedController } from './distribucion-estrategia-red/distribucion-estrategia-red.controller';
import { DistribucionEstrategiaRedRepository } from './distribucion-estrategia-red.repository';
import { CuadroAlmacenRedRepository } from './cuadro-almacen-red.repository';
import { DistribucionRedIpressController } from './distribucion-red-ipress/distribucion-red-ipress.controller';
import { EstablecimientoController } from './establecimiento/establecimiento.controller';
import { VacunadosCovidController } from './vacunados-covid/vacunados-covid.controller';
import { VacunadosCovidRepository } from './vacunados-covid/vacunados-covid.repository';
import { RecepcionAnexosController } from './recepcion-anexos/recepcion-anexos.controller';
import { RecepcionAnexosRepository } from './recepcion-anexos/recepcion-anexos.repository';
import { RecepcionAnexosEntity } from './recepcion-anexos/recepcion-anexos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProvinciaRepository,DistritoRepository,DistribucionIpressRepository,
        EstablecimientosRepository,DistribucionRedRepository,ConteoRapidoRepository,EnviosIpressRepository,EnviosRedRepository,
    StockIpressRepository,LoteVacunaRepository,DistribucionEstrategiaRedRepository,CuadroAlmacenRedRepository,VacunadosCovidRepository,
    RecepcionAnexosRepository],'default'),
TypeOrmModule.forFeature([MovimientosSismedRepository,MovimientosSismedEntity],'sismed')],
    providers: [],
    controllers: [DistribucionVacunasController, DistribucionEstrategiaRedController, DistribucionRedIpressController, EstablecimientoController, VacunadosCovidController, RecepcionAnexosController]   
})
export class DistribucionVacunasModule {}
