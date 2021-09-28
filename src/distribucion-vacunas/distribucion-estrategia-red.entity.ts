import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('DISTRIBUCION_ESTRATEGIA_PROVINCIA')
export class DistribucionEstrategiaRedEntity {
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    COD_PROVINCIA: string;
    @Column()
    FABRICANTE: string;
    @Column()
    CANTIDAD_VIALES: number;
    @Column()
    CANTIDAD_DOSIS: number;
    @Column()
    FECHA: Date;
    @Column()
    TIPO_DOCUMENTO: string;
    @Column()
    NUMERO_DOCUMENTO: string;
}
