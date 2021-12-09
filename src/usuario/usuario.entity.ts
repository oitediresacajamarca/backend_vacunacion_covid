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
}
