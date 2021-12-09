import { Column, ViewEntity } from "typeorm";

@ViewEntity('VACUNADOS_COVID_FAST')
export class VacunadosCovidFastEntity {
    @Column()
    dosis_aplicada:               string;
    @Column()
    GRUPO_VACUNACION:             string;
    @Column()
    gruporiesgo:                  string;
    @Column()
    comorbilidad:                 string;
    @Column()
    departamento_establecimiento: string;
    @Column()
    provincia_establecimiento:    string;
    @Column()
    distrito_establecimiento:     string;
    @Column()
    UBIGEO:                       string;
    @Column()
    fecha_vacunacion:             Date;
    @Column()
    Fabricante:                   string;
    @Column()
    GRUPO_EDAD:                   string;
    @Column()
    URBANIDAD:                    string;
    @Column()
    cantidad:                     number;

}
