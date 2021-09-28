import { Column, Entity, EntityRepository, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('DISTRIBUCION_POR_IPRESS')
export class DistribucionIpressEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    CODIGO_UNICO: string;
    @Column()
    CANTIDAD_RECIBIDA_VIALES: number;
    @Column()
    CANTIDAD_RECIBIDA_DOSIS:number;
    @Column()
    FECHA_DISTRIBUCION:Date;  
    @Column()
    FECHA_VENCIMIENTO: Date;
    @Column()
    OBSERVACION: string;
    @Column()
    FABRICANTE: string;
    @Column()
    DOSIS: string;
    @Column()
    TIPO_DOCUMENTO: string;
    @Column()
    NUMERO_DOCUMENTO: string;
    @Column()
    STOCK_ACTUAL: string;
    @Column()
    DESDE: string;
}
