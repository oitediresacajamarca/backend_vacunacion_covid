import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('MOVIMIENTO_VACUNAS')
export class MovimientoVacunasComplEntity {
    @PrimaryColumn()
    NUMERO_MOVIMIENTO_SIMED:number;
    @Column()
    FECHA_VENCIMIENTO:Date;
    @Column()
    FECHA_DESCONGELAMIENTO:Date;
}
