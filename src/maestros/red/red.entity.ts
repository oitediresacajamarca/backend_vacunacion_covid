import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('RED')
export class RedEntity {

    @PrimaryColumn()
    ID_RED:string
    @Column()
    ID_SUBREGION:string
    @Column()
    NOMBRE:string

}
