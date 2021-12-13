import { Column, Entity, ViewEntity } from "typeorm";

@ViewEntity('USUARIO_ROL')
export class UsuarioRolEntity {
    @Column()
    COD_ROL:string;
    @Column()
    ID_USUARIO:string;
}
