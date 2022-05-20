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
import { RecepcionAnexosService } from './recepcion-anexos/recepcion-anexos.service';
import { RegistroCentroVacunacionController } from './registro-centro-vacunacion/registro-centro-vacunacion.controller';
import { RegistroCentroVacunacionService } from './registro-centro-vacunacion/registro-centro-vacunacion.service';
import { RegistroCentroVacunacionEntity } from './registro-centro-vacunacion/registro-centro-vacunacion.entity';
import { CentroVacunacionService } from './centro-vacunacion/centro-vacunacion.service';
import { CentroVacunacionEntity } from './centro-vacunacion/centro-vacunacion.entity';
import { CentroVacunacionController } from './centro-vacunacion/centro-vacunacion.controller';
import { MovimientoVacunasComplController } from './movimiento-vacunas-compl/movimiento-vacunas-compl.controller';
import { MovimientoVacunasComplService } from './movimiento-vacunas-compl/movimiento-vacunas-compl.service';
import { MovimientoVacunasComplEntity } from './movimiento-vacunas-compl/movimiento-vacunas-compl.entity';
import { MovimientosVacunasSismedController } from './movimientos-vacunas-sismed/movimientos-vacunas-sismed.controller';
import { VacunadosCovidFastEntity } from './vacunados-covid/vacunados-covid-fast.entity';
import { RegistrosConProblemasDigitacionController } from './registros-con-problemas-digitacion/registros-con-problemas-digitacion/registros-con-problemas-digitacion.controller';
import { RegistrosConProblemasDigitacionService } from './registros-con-problemas-digitacion/registros-con-problemas-digitacion/registros-con-problemas-digitacion.service';
import { RegistrosConProblemasDigitacionEntity } from './registros-con-problemas-digitacion/registros-con-problemas-digitacion.entity';
import { PadronReniecEntity } from './padron-reniec/padron-reniec.entity';


@Module({
    imports: [TypeOrmModule.forFeature([ProvinciaRepository,DistritoRepository,DistribucionIpressRepository,
        EstablecimientosRepository,DistribucionRedRepository,ConteoRapidoRepository,EnviosIpressRepository,EnviosRedRepository,
    StockIpressRepository,LoteVacunaRepository,DistribucionEstrategiaRedRepository,CuadroAlmacenRedRepository,VacunadosCovidRepository,
    RecepcionAnexosRepository,RegistroCentroVacunacionEntity,CentroVacunacionEntity,MovimientoVacunasComplEntity
    ,VacunadosCovidFastEntity,RegistrosConProblemasDigitacionEntity,PadronReniecEntity],'default'),
TypeOrmModule.forFeature([MovimientosSismedRepository,MovimientosSismedEntity],'sismed')],
    providers: [RecepcionAnexosService, RegistroCentroVacunacionService, CentroVacunacionService, MovimientoVacunasComplService, RegistrosConProblemasDigitacionService],
    controllers: [DistribucionVacunasController, DistribucionEstrategiaRedController, DistribucionRedIpressController, EstablecimientoController, VacunadosCovidController, RecepcionAnexosController, RegistroCentroVacunacionController, CentroVacunacionController, MovimientoVacunasComplController, MovimientosVacunasSismedController, RegistrosConProblemasDigitacionController]   
})
export class DistribucionVacunasModule {}
