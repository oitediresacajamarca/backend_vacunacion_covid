import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('REGISTRO_CENTRO_VACUNACION')
export class RegistroCentroVacunacionEntity {
    @PrimaryGeneratedColumn()
    ID?:Number;
    @Column()  
    FECHA:                                  Date;
    @Column()
    FABRICANTE:                             string;
    @Column()
    DOSIS_DISTRIBUIDAS:                     number;
    @Column()
    DOSIS_ADMINISTRADAS:                    number;
    @Column()
    DOSIS_REGISTRADAS_HIS:                  number;
    @Column()
    DOSIS_CON_PROBLEMAS_DIGITACION:         number;
    @Column()
    DOSIS_PENDIENTES_POR_DIGITAR:           number;
    @Column()
    DOSIS_PERDIDAS_FP:                      number;
    @Column()
    MERMA_DOSIS_INCIDENTE_ADVERSO:          number;
    @Column()
    FACTOR_PERDIDA_CALCULADO:               number;
    @Column()
    STOCK_DOSIS:                            number;
    @Column()
    CENTRO_DE_VACUNACION:                   number;
    @Column()
    IPRESS:                                 string;
    @Column()
    STOCK_INICIAL:                          number;
    @Column()
    DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION: number;
    @Column()
    TIPO:string;
    @Column()
    ESTRATEGIA:string;
    @Column()
    FECHA_REGISTRO:Date;




}
