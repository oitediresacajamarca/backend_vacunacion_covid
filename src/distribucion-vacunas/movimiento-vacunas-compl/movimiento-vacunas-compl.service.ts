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

        let mov = await this.movimientorepo.findOne({ where: { NUMERO_MOVIMIENTO_SIMED: NUMERO_MOVIMIENTO } })


        if (mov == undefined) {
            mov = this.movimientorepo.create()
        }


        Object.assign(mov, data)

        const resp = await this.movimientorepo.save(mov)


        return mov;




    }
}
