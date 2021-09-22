import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ENVIO_POR_IPRESS')
export class EnviosIpressyEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    CANTIDAD_VIALES:number; 
    @Column()
    FECHA_ENVIO:Date;
    @Column()
    FECHA_DESCONGELAMIENTO:Date;
    @Column()
    FECHA_MAXIMA_USO:Date;
    @Column()
    CANTIDAD_DOSIS:number;
}
