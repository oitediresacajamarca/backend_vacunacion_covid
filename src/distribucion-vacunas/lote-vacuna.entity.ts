import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('LOTE_VACUNAS')
export class LoteVacunaEntity {
    @PrimaryColumn()
    ID:number;
    @Column()
    NUM_LOTE:string;
    @Column()
    FABRICANTE:string;
}
