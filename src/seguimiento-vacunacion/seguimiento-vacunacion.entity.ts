import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('SeguimientoVacunacion')
export class SeguimientoVacunacionEntity {
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    FECHA:Date;
    @Column()
    MOTIVO_SEGUIMIENTO:string;
    @Column()
    TIPO_SEGUIMIENTO:string;

}
