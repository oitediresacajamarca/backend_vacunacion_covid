import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
        console.log(ubigeo)
        console.log(tipo_centro)
        const resp = await this.centrorep.find({ where: { UBIGEO:'060101' , TIPO:tipo_centro} })
        console.log(resp)
        return resp;
    }
}
