import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('REGISTROS_ANEXOS')
export class RecepcionAnexosEntity {
    @PrimaryColumn()
    ID: number;
    @Column()
    COD_PROVINCIA: string;
    @Column()
    TIPO_DOCUMENTO: string;
    @Column()
    TEMPERATURA_MAXIMA: number;
    @Column()
    TEMPERATURA_MINIMA: number;
    @Column()
    OBSERVACIONES: string;
    @Column()
    ANEXO_1: string;
    @Column()
    ANEXO_2: string;
    @Column()
    ANEXO_3: string
}
