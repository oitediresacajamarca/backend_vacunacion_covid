import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('REGISTROS_ANEXOS')
export class RecepcionAnexosEntity {
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    FECHA: Date;
    @Column()
    COD_PROVINCIA: string;
    @Column()
    TIPO_DOCUMENTO: string;
    @Column()
    NUMERO_DOCUMENTO: string;
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
    ANEXO_3: string;
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
