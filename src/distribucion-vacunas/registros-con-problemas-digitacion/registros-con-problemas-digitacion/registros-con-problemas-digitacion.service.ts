import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrosConProblemasDigitacionEntity } from '../registros-con-problemas-digitacion.entity';

@Injectable()
export class RegistrosConProblemasDigitacionService {
    constructor(@InjectRepository(RegistrosConProblemasDigitacionEntity, 'default')
    private casos: Repository<RegistrosConProblemasDigitacionEntity>){}


    async nuevo(data:any){
     const resp:any=    this.casos.create(data)
     resp.DOSIS_CON_PROBLEMAS=data.DOSIS_CON_PROBLEMAS.nombre
     resp.FECHA_REGISTRO=new Date();

     const nuevo= await this.casos.save(resp)
     return nuevo
    }
    async listar(){
        const resp=await this.casos.find()

        return resp
    }
    async listar_por_ubigeo(ubigeo:string){

        const resp=await this.casos.find({UBIGEO_REPORTA:ubigeo})

        return resp
    

    }
}
