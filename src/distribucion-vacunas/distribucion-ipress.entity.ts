import { Column, Entity, EntityRepository, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('DISTRIBUCION_POR_IPRESS')
export class DistribucionIpressEntity {
@Column()
    COD_DISTRIBUCION:number;
    @PrimaryColumn()
    CODIGO_UNICO: string;
    @Column()
    CANTIDAD_RECIBIDA: number;
    @PrimaryColumn()
    FECHA_ENTREGA: Date;
    @Column()
    FECHA_VENCIMIENTO: Date;
    @Column()
    OBSERVACION: string;
    @Column()
    FABRICANTE: string;
    @Column()
    DOSIS: string;
    @Column()
    NUM_LOTE: string;
    @Column()
    STOCK_ACTUAL: string;
}
