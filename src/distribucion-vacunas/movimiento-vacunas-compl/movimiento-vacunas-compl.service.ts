import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoVacunasComplEntity } from './movimiento-vacunas-compl.entity';

@Injectable()
export class MovimientoVacunasComplService {

    constructor(@InjectRepository(MovimientoVacunasComplEntity, 'default')
    private movimientorepo: Repository<MovimientoVacunasComplEntity>) {

    }

    async asignar(NUMERO_MOVIMIENTO: number, data: any) {

     

        let mov: any = await this.movimientorepo.findOne({ where: { NUMERO_MOVIMIENTO_SIMED: NUMERO_MOVIMIENTO } })

        await this.movimientorepo.delete(NUMERO_MOVIMIENTO)
    
        mov = this.movimientorepo.create(data)

        const resp = await this.movimientorepo.save(mov)
        return resp;




    }
}
