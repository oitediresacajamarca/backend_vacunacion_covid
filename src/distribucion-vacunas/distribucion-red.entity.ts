import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('DISTRIBUCION_DOSIS_POR_PROVINICIA')
export class DistribucionRedEntity {
    @PrimaryGeneratedColumn()
    id:                    number;
    @Column()
    COD_PROVINCIA:         string;
    @Column()
    CANTIDAD_DOSIS:        number;
    @Column()
    CANTIDAD_VIALES:       number;
    @Column()
    FECHA_DE_DISTRIBUCION: Date;
    @Column()
    FABRICANTE:            string;
    @Column()
    DESDE_ALMACEN:         string;
    @Column()
    FECHA_VENCIMIENTO:     Date;
    @Column()
    TIPO_DOCUMENTO:        string;
    @Column()
    NUMERO_DOCUMENTO:      string;
    @Column()
    FECHA_DESCONGELAMIENTO:     Date;
}
