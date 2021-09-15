import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('DISTRIBUCION_DOSIS_POR_PROVINICIA')
export class DistribucionRedEntity {
    @PrimaryColumn()
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
}
