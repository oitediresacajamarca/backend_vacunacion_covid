import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronReniecEntity } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.entity';
import { AfiliadosSisEntity } from '../afiliados-sis.entity';
import { RenaesEntity } from '../renaes.entity';
import { ActualizacionesService } from './actualizaciones.service';
import { PadronReniecService } from './padron-reniec/padron-reniec.service';

@Module({
    imports: [TypeOrmModule.forFeature([AfiliadosSisEntity,RenaesEntity],'AFILIADOS_SIS'),
    TypeOrmModule.forFeature([PadronReniecEntity],'default')],
    providers: [ActualizacionesService,PadronReniecService],
})
export class ActualizacionesModule {}
