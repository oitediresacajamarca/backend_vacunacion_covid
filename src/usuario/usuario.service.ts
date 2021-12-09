import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity, 'USUARIOS')
    private usuariorep: Repository<UsuarioEntity>){

    }

    async listar(){
        const r= await this.usuariorep.find()
        return r
    }


    async login(login:any){
       
       
        const r= await this.usuariorep.findOne({where:{LOGIN:login.login,CLAVE:login.clave}})
  
        let respuesta={}
        if(r != undefined){

            respuesta={...r,mensaje:'usuario logueado'}
        }else {
            respuesta={mensaje:'usuario no logueado'}  
        }

        return respuesta
    }


}
