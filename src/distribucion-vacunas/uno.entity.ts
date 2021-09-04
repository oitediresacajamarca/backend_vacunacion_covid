import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('uno')
export class UnoEntity {
@PrimaryColumn()
    comid:string
    @Column()
    otra:string
}
