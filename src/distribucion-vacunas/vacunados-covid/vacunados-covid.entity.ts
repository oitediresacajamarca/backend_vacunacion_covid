import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('VACUNADOS_COVID')
export class VacunadosCovidEntity {
    @Column()
    abrev_tipo_doc:               string;
    @Column()
    num_doc:                      string;
    @Column()
    paciente:                     string;
    @Column()
    desc_genero:                  string;
    @Column()
    desc_etn:                     string;
    @Column()
    fecha_nacimiento:             Date;
    @Column()
    id_ubigeo_res:                string;
    @Column()
    departamento_residencia:      string;
    @Column()
    provincia_residencia:         string;
    @Column()
    distrito_residencia:          string;
    @Column()
    actividad:                    string;
    @Column()
    anioedad_atencion:            number;
    @Column()
    mesedad_atencion:             number;
    @Column()
    diaedad_atencion:             number;
    @Column()
    fecha_vacunacion:             Date;
    @PrimaryColumn()
    id_vac_pac:                   number;
    @Column()
    codigo_vacuna:                number;
    @Column()
    vacuna:                       string;
    @Column()
    dosis_aplicada:               string;
    @Column()
    gruporiesgo:                  string;
    @Column()
    comorbilidad:                 string;
    @Column()
    contactotbp:                  string;
    @Column()
    vacunador:                    string;
    @Column()
    DISA:                         string;
    @Column()
    RED:                          string;
    @Column()
    MICRORED:                     string;
    @Column()
    cod_unico:                    number;
    @Column()
    establecimiento:              string;
    @Column()
    departamento_establecimiento: string;
    @Column()
    provincia_establecimiento:    string;
    @Column()
    distrito_establecimiento:     string;
    @Column()
    fecha_registro:               string;
    @Column()
    registrador:                  string;
    @Column()
    codigo_modular:               string;
    @Column()
    id_estrategiavac:             number;
    @Column()
    id_tipoactividad:             number;
    @Column()
    Lote_Vacuna:                  string;
    @Column()
    Fabricante:                   string;

}
