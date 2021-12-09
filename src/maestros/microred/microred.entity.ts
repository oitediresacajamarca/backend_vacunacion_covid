import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('MICRORED')
export class MicroredEntity {
    @PrimaryColumn()
    ID_MICRORED:number;
    @Column()
    ID_RED:number;
    @Column()
    NOMBRE:number;

}
