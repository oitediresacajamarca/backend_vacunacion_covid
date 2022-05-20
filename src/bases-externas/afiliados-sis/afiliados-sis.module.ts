import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronReniecEntity } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.entity';
import { ActualizacionesModule } from '../actualizaciones/actualizaciones.module';
import { PadronReniecService } from '../actualizaciones/padron-reniec/padron-reniec.service';
import { AfiliadosSisEntity } from '../afiliados-sis.entity';
import { AfiliadosSisRepository } from '../afiliados-sis.repository';
import { RenaesEntity } from '../renaes.entity';
import { AfiliadosSisController } from './afiliados-sis.controller';

@Module({
  controllers: [AfiliadosSisController],
  imports: [TypeOrmModule.forFeature([AfiliadosSisEntity,RenaesEntity],'AFILIADOS_SIS'),
  TypeOrmModule.forFeature([PadronReniecEntity],'default'),PadronReniecService,ActualizacionesModule],
  exports:[]
})
export class AfiliadosSisModule {}
