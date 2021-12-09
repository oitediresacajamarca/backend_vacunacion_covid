import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('CENTRO_VACUNACION')
export class CentroVacunacionEntity {
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    CENTRO_VACUNACION:string;
    @Column()
    RENIPRESS:string;
    @Column()
    UBIGEO:string;
    @Column()
    TIPO:string;
}
