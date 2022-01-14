import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('CASOS_PROBLEMAS_DIGITACION')
export class RegistrosConProblemasDigitacionEntity {

    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    NUMERO_DOCUMENTO:string;
    @Column()
    NOMBRES: string;
    @Column()
    APELLIDO_PATERNO: string;
    @Column()
    APELLIDO_MATERNO: string;
    @Column()
    DOSIS_CON_PROBLEMAS: string;
    @Column()
    DESCRIPCION_DEL_CASO: string;
    @Column()
    FECHA_REGISTRO:Date;
    @Column()
    UBIGEO_REPORTA:string;




}
