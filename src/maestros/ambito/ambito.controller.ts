import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentroVacunacionEntity } from 'src/distribucion-vacunas/centro-vacunacion/centro-vacunacion.entity';
import { Like, Repository } from 'typeorm';
import { IpressEntity } from '../ipress/ipress.entity';
import { MicroredEntity } from '../microred/microred.entity';

import { RedEntity } from '../red/red.entity';


@Controller('ambito')
export class AmbitoController {
    constructor(@InjectRepository(RedEntity, 'MAESTROS')
    private red_rep: Repository<RedEntity>, @InjectRepository(MicroredEntity, 'MAESTROS')
        private microrep: Repository<MicroredEntity>, @InjectRepository(IpressEntity, 'MAESTROS')
        private ipressrep: Repository<IpressEntity>, @InjectRepository(CentroVacunacionEntity, 'default')
        private centrorep: Repository<CentroVacunacionEntity>) {

    }
    @Get(':nivel/:raiz')
    async devolver_ambito(@Param('nivel') nivel: string, @Param('raiz') raiz: string) {
        let resp: any[]
        if (nivel == 'RED') {
            resp = await this.red_rep.find({ where: { ID_RED: Like('%') } })



        }


        if (nivel == 'MICRORED') {
            resp = await this.microrep.find({ where: { CODIGO_BUSQUEDA: Like(raiz + '%') } })


        }

        if (nivel == 'IPRESS') {
            resp = await this.ipressrep.find({ where: { CODIGO_BUSQUEDA: Like(raiz + '%') } })


        }
        if (nivel == 'CENTRO_VACUNACION') {
            resp = await this.centrorep.find({ where: { CODIGO_BUSQUEDA: Like(raiz + '%') } })

       }

        let resp1 = resp.map(resp => {

            if (nivel == 'CENTRO_VACUNACION') { return { NOMBRE: resp.CENTRO_VACUNACION } }
            else {

                return { NOMBRE: resp.NOMBRE }
            }

        })
 

        return resp1;
    }
}
