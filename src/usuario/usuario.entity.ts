import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('USUARIOS')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    LOGIN: string;
    @Column()
    CLAVE: string;
    @Column()
    AMBITO: string;
    @Column()
    TIPO_AMBITO: string;
    @Column()
    EMAIL: string;
    @Column()
    UBIGEO:string
    @Column()
    COD_AMBITO:string;
    @Column()
    NUMERO_DOCUMENTO:string;
    @Column()
    NOMBRES:string;
    @Column()
    APELLIDO_PATERNO:string;
    @Column()
    APELLIDO_MATERNO:string;
    @Column()
    FECHA_CREACION:Date;
}
