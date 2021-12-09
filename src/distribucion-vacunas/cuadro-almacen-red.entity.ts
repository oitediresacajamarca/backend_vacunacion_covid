import { Column, ViewEntity } from "typeorm";


@ViewEntity('CUADRO_COMPARACION')
export class CuadroAlmacenRedEntity {

    @Column()
    ID_PROVINCIA: string;
    @Column()
    NOMBRE: string;
    @Column()
    CANTIDAD_VIALES_DISTRIBUIDAS: number;
    @Column()
    CANTIDAD_DOSIS_DISTRIBUIDAS: number;
    @Column()
    CANTIDAD_DOSIS_ENVIADAS: number;
    @Column()
    CANTIDAD_VIALES_ENVIADAS: number;
    @Column()
    FABRICANTE:string;

}
