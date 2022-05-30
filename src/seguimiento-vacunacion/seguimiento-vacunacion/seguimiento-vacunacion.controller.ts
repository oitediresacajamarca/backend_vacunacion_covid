import { Body, Controller, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeguimientoVacunacionEntity } from '../seguimiento-vacunacion.entity';
import { SeguimientoVacunacion } from '../seguimiento-vacunacion.interface';

@Controller('seguimiento-vacunacion')
export class SeguimientoVacunacionController {

    constructor(@InjectRepository(SeguimientoVacunacionEntity, 'default')
    private centrorep: Repository<SeguimientoVacunacionEntity>) {

    }

    @Post('nuevo')
    async nuevo(@Body() data: any) {
        console.log(data)

        const resp =  this.centrorep.create({ FECHA: data.FECHA_SEGUIMIENTO, MOTIVO_SEGUIMIENTO: data.MOTIVO_SEGUIMIENTO, TIPO_SEGUIMIENTO: data.TIPO_SEGUIMIENTO.name })
     await   this.centrorep.save(resp)
        return resp;

    }
}
