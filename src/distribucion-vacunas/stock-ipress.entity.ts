import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('STOCK_IPRESS')
export class StockIpressEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    FECHA: Date;
    @Column()
    CODIGO_UNICO: string;
    @Column()
    STOCK_VIALES: number;
    @Column()
    STOCK_DOSIS: number;
    @Column()
    FECHA_DESCONGELAMIENTO: Date;
    @Column()
    FECHA_MAXIMA_USO: Date;
    @Column()
    NUMERO_DOCUMENTO_RESPONSABLE: String;
    @Column()
    NOMBRES_RESPONSABLE: String;
    @Column()
    OBSERVACION: String;
}
