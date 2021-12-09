import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CentroVacunacionEntity } from './distribucion-vacunas/centro-vacunacion/centro-vacunacion.entity';
import { ConteoRapidoEntity } from './distribucion-vacunas/conteo-rapido.entity';
import { CuadroAlmacenRedEntity } from './distribucion-vacunas/cuadro-almacen-red.entity';
import { DistribucionEstrategiaRedEntity } from './distribucion-vacunas/distribucion-estrategia-red.entity';
import { DistribucionIpressEntity } from './distribucion-vacunas/distribucion-ipress.entity';
import { DistribucionRedEntity } from './distribucion-vacunas/distribucion-red.entity';

import { DistribucionVacunasModule } from './distribucion-vacunas/distribucion-vacunas.module';
import { DistritoEntity } from './distribucion-vacunas/distrito.entity';
import { EnviosIpressyEntity } from './distribucion-vacunas/envios-ipressy.entity';
import { EnviosRedEntity } from './distribucion-vacunas/envios-red.entity';
import { EstablecimientosEntity } from './distribucion-vacunas/establecimientos.entity';
import { LoteVacunaEntity } from './distribucion-vacunas/lote-vacuna.entity';
import { MovimientoVacunasComplEntity } from './distribucion-vacunas/movimiento-vacunas-compl/movimiento-vacunas-compl.entity';
import { MovimientosSismedEntity } from './distribucion-vacunas/movimientos-sismed.entity';
import { ProvinciaEntity } from './distribucion-vacunas/provincia.entity';
import { RecepcionAnexosEntity } from './distribucion-vacunas/recepcion-anexos/recepcion-anexos.entity';
import { RegistroCentroVacunacionEntity } from './distribucion-vacunas/registro-centro-vacunacion/registro-centro-vacunacion.entity';
import { StockIpressEntity } from './distribucion-vacunas/stock-ipress.entity';
import { UnEntity } from './distribucion-vacunas/un.entity';
import { VacunadosCovidFastEntity } from './distribucion-vacunas/vacunados-covid/vacunados-covid-fast.entity';
import { VacunadosCovidEntity } from './distribucion-vacunas/vacunados-covid/vacunados-covid.entity';
import { IpressEntity } from './maestros/ipress/ipress.entity';
import { MaestrosModule } from './maestros/maestros.module';
import { MicroredEntity } from './maestros/microred/microred.entity';
import { RedEntity } from './maestros/red/red.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

const defaultOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  synchronize: false,
};


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name:'default',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'BD_VACUNACION_COVID',
      entities: [
        ConteoRapidoEntity,DistribucionIpressEntity,DistribucionRedEntity,DistritoEntity,ProvinciaEntity,EstablecimientosEntity,
        EnviosIpressyEntity,EnviosRedEntity,StockIpressEntity,LoteVacunaEntity,
        DistribucionEstrategiaRedEntity,CuadroAlmacenRedEntity,VacunadosCovidEntity,RecepcionAnexosEntity,
        RegistroCentroVacunacionEntity,CentroVacunacionEntity,MovimientoVacunasComplEntity,VacunadosCovidFastEntity
      ],
      "extra": {
        "validateConnection": false,
        "trustServerCertificate": true
      }
    }),
    //j;K%}7er6iVqTrDP
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      
      database: 'MEDICAMENTOS',
      entities: [
        UnEntity,MovimientosSismedEntity
      ],
      extra: {
        "validateConnection": false,
        "trustServerCertificate": true,
        
      },
      options:{encrypt:false},
      name:'sismed'

    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'BD_MAESTROS',
      entities: [
        RedEntity,MicroredEntity,IpressEntity
      ],
      extra: {
        "validateConnection": false,
        "trustServerCertificate": true,
        
      },
      options:{encrypt:false},
      name:'MAESTROS'

    }),  
      TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'BD_USUARIOS',
      entities: [
        UsuarioEntity
      ],
      extra: {
        "validateConnection": false,
        "trustServerCertificate": true,
        
      },
      options:{encrypt:false},
      name:'USUARIOS'

    }),
    DistribucionVacunasModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'tablero_vacunacion'),
    }),
    MaestrosModule,
    UsuarioModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
