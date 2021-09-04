import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('DISTRITO')
export class DistritoEntity {
    @Column()
    ID_PROVINCIA: string;
    @PrimaryColumn()
    ID_DISTRITO: string;
    @Column()
    NOMBRE: string;
}
