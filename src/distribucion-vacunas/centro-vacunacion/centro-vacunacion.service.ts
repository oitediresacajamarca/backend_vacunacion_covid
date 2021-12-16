import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { RegistroCentroVacunacionEntity } from '../registro-centro-vacunacion/registro-centro-vacunacion.entity';
import { CentroVacunacionEntity } from './centro-vacunacion.entity';

@Injectable()
export class CentroVacunacionService {
    constructor(@InjectRepository(CentroVacunacionEntity, 'default')
    private centrorep: Repository<CentroVacunacionEntity>) {

    }
    async devolver_centro_por_ubigeo(ubigeo: string) {
        const resp = await this.centrorep.find({ where: { UBIGEO: ubigeo } })
        return resp;
    }
    async devolver_centro_por_ubigeo_tipo_centro(ubigeo: string,tipo_centro:string) {

        const resp = await this.centrorep.find({ where: { UBIGEO:Like(ubigeo+'%') , TIPO:tipo_centro} })
      
        return resp;
    }
}
