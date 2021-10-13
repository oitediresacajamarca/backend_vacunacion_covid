import { Injectable } from '@nestjs/common';
import { RecepcionAnexosRepository } from './recepcion-anexos.repository';

@Injectable()
export class RecepcionAnexosService {

    constructor(private anexos_rep: RecepcionAnexosRepository) {

    }

    async devolver_listado_anexos() {
        const resp = await this.anexos_rep.find()
        return resp;
    }

    async nuevo_listado(body: any) {
        let nuevo = this.anexos_rep.create()
   
        nuevo.ANEXO_1 = body.ANEXO_1
        nuevo.ANEXO_2 = body.ANEXO_2
        nuevo.ANEXO_3 = body.ANEXO_3

        nuevo.TEMPERATURA_MAXIMA = body.TEMPERATUR_MAXIMA
        nuevo.TEMPERATURA_MINIMA = body.TEMPERATURA_MINIMA
        nuevo.COD_PROVINCIA = body.PROVINCIA.ID_PROVINCIA
        nuevo.TIPO_DOCUMENTO = body.TIPO_DOCUMENTO.NOMBRE
        nuevo.NUMERO_DOCUMENTO = body.NUMERO_DOCUMENTO
        nuevo.OBSERVACIONES = body.OBSERVACIONES




    const resp=   await this.anexos_rep.save(nuevo)

 

        return resp;
    }

    async eliminar(ID){
        const resp=   await    this.anexos_rep.delete({ID:ID})
        return resp
    }


}
