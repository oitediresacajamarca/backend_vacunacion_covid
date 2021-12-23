import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CentroVacunacionEntity } from '../centro-vacunacion/centro-vacunacion.entity';
import { RegistroCentroVacunacionEntity } from './registro-centro-vacunacion.entity';

@Injectable()
export class RegistroCentroVacunacionService {
    constructor(@InjectRepository(RegistroCentroVacunacionEntity, 'default')
    private centrorep: Repository<RegistroCentroVacunacionEntity>, @InjectRepository(CentroVacunacionEntity, 'default')
        private centrovacrep: Repository<CentroVacunacionEntity>) {

    }
    async devolver_registros_por_centro(centro: string) {
        const resp = await this.centrorep.find({ where: { CENTRO_DE_VACUNACION: centro } })
        return resp;

    }

    async nuevo_registros_por_centro(centro: number, datos: any) {


        let nuevo = this.centrorep.create()

        nuevo = {
            FECHA: datos.FECHA, FABRICANTE: datos.FABRICANTE.NOMBRE, DOSIS_DISTRIBUIDAS: datos.DOSIS_DISTRIBUIDAS, DOSIS_ADMINISTRADAS: datos.DOSIS_ADMINISTRADAS, DOSIS_REGISTRADAS_HIS: datos.DOSIS_REGISTRADAS_HIS,
            DOSIS_CON_PROBLEMAS_DIGITACION: datos.DOSIS_CON_PROBLEMAS_DIGITACION, DOSIS_PENDIENTES_POR_DIGITAR: datos.DOSIS_CON_PROBLEMAS_DIGITACION, DOSIS_PERDIDAS_FP: datos.DOSIS_PERDIDAS_FP,
            MERMA_DOSIS_INCIDENTE_ADVERSO: datos.MERMA_DOSIS_INCIDENTE_ADVERSO, FACTOR_PERDIDA_CALCULADO: datos.FACTOR_PERDIDA_CALCULADO, STOCK_DOSIS: datos.STOCK_DOSIS, CENTRO_DE_VACUNACION: centro, IPRESS: datos.IPRESS,
            STOCK_INICIAL: nuevo.STOCK_INICIAL, DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION: nuevo.DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION, TIPO: nuevo.TIPO,
            ESTRATEGIA: datos.ESTRATEGIA.NOMBRE, FECHA_REGISTRO: new Date()
        }


        const resp = await this.centrorep.save(nuevo)

        return nuevo;

    }

    async eliminar_regsitro(id: any) {

        const resp = await this.centrorep.delete({ ID: id.id })
        return resp
    }

    async devolver_registrado_ubigeofecha(ubigeo, fecha) {
      
        let respuesta: any[] = []
        const centros: any[] = await this.centrovacrep.find({ where: { UBIGEO: Like(ubigeo + '%') } })


        await Promise.all(centros.map(async centro => {

            let registros_por_centro: any[] = await this.centrorep.find({ where: { CENTRO_DE_VACUNACION: centro.ID ,FECHA:fecha} })
            respuesta.push(...registros_por_centro.map(registro => {
                return { ...registro, ...centro,ESTADO:true }
            }))

        }))

   
        return respuesta


    }

}
