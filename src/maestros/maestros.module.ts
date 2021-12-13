import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedController } from './red/red.controller';
import { RedEntity } from './red/red.entity';
import { RedRepository } from './red/red.repository';
import { MicroredController } from './microred/microred.controller';
import { MicroredRepository } from './microred/microred.repository';
import { MicroredEntity } from './microred/microred.entity';
import { IpressController } from './ipress/ipress.controller';
import { IpressEntity } from './ipress/ipress.entity';
import { AmbitoController } from './ambito/ambito.controller';
import { CentroVacunacionEntity } from 'src/distribucion-vacunas/centro-vacunacion/centro-vacunacion.entity';



@Module({
  controllers: [RedController, MicroredController, IpressController, AmbitoController],
  imports:[TypeOrmModule.forFeature([RedRepository,RedEntity,MicroredRepository,MicroredEntity,IpressEntity],'MAESTROS'),
  TypeOrmModule.forFeature([CentroVacunacionEntity],'default')],
  

})
export class MaestrosModule {}
