import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DistribucionVacunasModule } from './distribucion-vacunas/distribucion-vacunas.module';


@Module({
  imports: [
 
    
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '.',
      database: 'BD_VACUNACION_COVID',
      
     
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: false,
      "extra": {
        "validateConnection": false,
        "trustServerCertificate": true
      }



    }),
    DistribucionVacunasModule
    
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
