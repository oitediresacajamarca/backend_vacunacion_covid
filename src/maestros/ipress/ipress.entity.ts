import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('IPRESS')
export class IpressEntity {
    @PrimaryColumn()
    COD_IPRESS:       string;
    @Column()
    ID_CLAS:          number;
    @Column()
    ID_UE:            number;
    @Column()
    ID_DISTRITO:      string;
    @Column()
    NOMBRE:           string;
    @Column()
    DIRECCION:        string;
    @Column()
    ID_MICRORED:      number;
    @Column()
    CATEGORIA:        Categoria;
    @Column()
    ID_PUNTO_DIG_HIS: number;
   
}

export enum Categoria {
    I1 = "I-1",
    I2 = "I-2",
    I3 = "I-3",
    I4 = "I-4",
    Ii1 = "II-1",
    Ii2 = "II-2",
    IiE = "II-E",
    SinCatego = "Sin Catego",
}

