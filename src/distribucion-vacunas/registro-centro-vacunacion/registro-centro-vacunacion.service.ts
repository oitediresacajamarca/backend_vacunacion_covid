import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistroCentroVacunacionEntity } from './registro-centro-vacunacion.entity';

@Injectable()
export class RegistroCentroVacunacionService {
    constructor(@InjectRepository(RegistroCentroVacunacionEntity, 'default')
    private centrorep: Repository<RegistroCentroVacunacionEntity>) {

    }
    async devolver_registros_por_centro(centro: string) {
        const resp = await this.centrorep.find({ where: { CENTRO_DE_VACUNACION: centro } })
        return resp;

    }

    async nuevo_registros_por_centro(centro: number, datos: any) {
        console.log(datos)

        let nuevo = this.centrorep.create()

        nuevo = {
            FECHA: datos.FECHA, FABRICANTE: datos.FABRICANTE.NOMBRE, DOSIS_DISTRIBUIDAS: datos.DOSIS_DISTRIBUIDAS, DOSIS_ADMINISTRADAS: datos.DOSIS_ADMINISTRADAS, DOSIS_REGISTRADAS_HIS: datos.DOSIS_REGISTRADAS_HIS,
            DOSIS_CON_PROBLEMAS_DIGITACION: datos.DOSIS_CON_PROBLEMAS_DIGITACION, DOSIS_PENDIENTES_POR_DIGITAR: datos.DOSIS_CON_PROBLEMAS_DIGITACION, DOSIS_PERDIDAS_FP: datos.DOSIS_PERDIDAS_FP,
            MERMA_DOSIS_INCIDENTE_ADVERSO: datos.MERMA_DOSIS_INCIDENTE_ADVERSO, FACTOR_PERDIDA_CALCULADO: datos.FACTOR_PERDIDA_CALCULADO, STOCK_DOSIS: datos.STOCK_DOSIS, CENTRO_DE_VACUNACION: centro, IPRESS: datos.IPRESS,
            STOCK_INICIAL: nuevo.STOCK_INICIAL, DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION: nuevo.DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION, TIPO: nuevo.TIPO,
            ESTRATEGIA: datos.ESTRATEGIA.NOMBRE,FECHA_REGISTRO:new Date()
        }


        const resp = await this.centrorep.save(nuevo)

        return nuevo;

    }

    async eliminar_regsitro(id: any) {
       
        const resp = await this.centrorep.delete({ ID: id.id })
        return resp
    }

}
