import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';



import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DistribucionVacunasModule } from './distribucion-vacunas/distribucion-vacunas.module';

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
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'BD_VACUNACION_COVID',
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      "extra": {
        "validateConnection": false,
        "trustServerCertificate": true
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'risc_2030',
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      "extra": {
        "validateConnection": false,
        "trustServerCertificate": true
      }
    }),
    DistribucionVacunasModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'tablero_vacunacion'),
    })


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
