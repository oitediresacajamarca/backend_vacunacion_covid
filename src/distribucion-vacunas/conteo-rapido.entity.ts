import { Column, Entity, EntityRepository, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('CONTEO_RAPIDO')
export class ConteoRapidoEntity {
@PrimaryGeneratedColumn()
    ID: number;
    @Column()
    PROVINCIA: string;
    @Column()
    DISTRITO: string;
    @Column()
    UBIGEO: string;
    @Column()
    FABRICANTE: string;
    @Column()
    FECHA: Date;
    @Column()
    CANTIDAD: number;
}
