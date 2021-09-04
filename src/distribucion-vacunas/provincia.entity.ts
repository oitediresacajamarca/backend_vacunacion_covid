import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('PROVINCIA')
export class ProvinciaEntity {
    @PrimaryColumn()
    ID_PROVINCIA:    string;
    @Column()
    ID_DEPARTAMENTO: string;
    @Column()
    NOMBRE:          string;
}
