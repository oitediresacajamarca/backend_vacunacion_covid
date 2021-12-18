import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Like, Repository, SimpleConsoleLogger } from 'typeorm';
import { UsuarioRolEntity } from './usuario-rol.entity';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity, 'USUARIOS')
    private usuariorep: Repository<UsuarioEntity>, @InjectRepository(UsuarioRolEntity, 'USUARIOS')
        private usuariorolrep: Repository<UsuarioRolEntity>) {

    }

    async listar() {
        const r = await this.usuariorep.find()
        return r
    }


    async listar_por_ambito(ambito: string) {

        const r = await this.usuariorep.find({ where: { COD_AMBITO: Like(ambito + '%') } })
        return r
    }

    async listar_por_ubigeo(ubigeo: string) {
        const r = await this.usuariorep.find({ where: { UBIGEO: Like(ubigeo + '%') } })
        return r
    }

    async login(login: any) {


        const r = await this.usuariorep.findOne({ where: { LOGIN: login.login, CLAVE: login.clave } })


        let respuesta = {}
        if (r != undefined) {

            let roles = await this.usuariorolrep.find({ where: { ID_USUARIO: r.ID } })

            respuesta = { ...r, mensaje: 'usuario logueado', roles: roles }

        } else {
            respuesta = { mensaje: 'usuario no logueado' }
        }

        return respuesta
    }

    async nuevo_usuario(nuevo: any) {

       
        let rep = this.usuariorep.create({
            NUMERO_DOCUMENTO: nuevo.NUMERO_DOCUMENTO, NOMBRES: nuevo.NOMBRES,
            APELLIDO_PATERNO: nuevo.APELLIDO_PATERNO, APELLIDO_MATERNO: nuevo.APELLIDO_MATERNO,
            COD_AMBITO: nuevo.COD_AMBITO, EMAIL: nuevo.EMAIL,
            LOGIN: nuevo.NUMERO_DOCUMENTO, CLAVE: nuevo.NUMERO_DOCUMENTO, AMBITO: nuevo.AMBITO, TIPO_AMBITO: nuevo.TIPO_AMBITO,
            FECHA_CREACION: new Date(),UBIGEO:nuevo.UBIGEO
        })
        const resp = await this.usuariorep.save(rep)
        return resp;

    }

    async eliminar(ID: any) {
        const r = await this.usuariorep.delete({ID:ID.ID})
        return r
    }

}
