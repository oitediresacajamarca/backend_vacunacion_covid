import { Column, ViewEntity } from "typeorm";


@ViewEntity('RENAES CAJAMARCA')
export class RenaesEntity {
    @Column()
    Institución:                                               string;
    @Column()
    EES:                                                       string;
    @Column()
    "Código Único":                                            string;
    @Column()
    "Nombre del establecimiento":                              string;
    @Column()
    Microrred:                                                 string;
    @Column()
    Red:                                                       string;
    @Column()
    "Unidad Ejecutora":                                        string;
    @Column()
    "Código UE":                                               string;
    @Column()
    Categoria:                                                 string;
    @Column()
    "Quintil Belga":                                           string;
    @Column()
    Belga:                                                     string;
    @Column()
    "Quintil Regional":                                        number;
    @Column()
    "Quintil Nacional":                                        number;
    @Column()
    FON:                                                       string;
    @Column()
    FED:                                                       string;
    @Column()
    Clasificación:                                             string;
    @Column()
    Tipo:                                                      string;
    @Column()
    Departamento:                                              string;
    @Column()
    Provincia:                                                 string;
    @Column()
    Distrito:                                                  string;
    @Column()
    UBIGEO:                                                    string;
    @Column()
    Dirección:                                                 string;
    @Column()
    "Código DISA":                                             string;
    @Column()
    "Código Red":                                              string;
    @Column()
    "Código Microrred":                                        string;
    @Column()
    DISA:                                                      string;
    @Column()
    Teléfono:                                                  string;
    @Column()
    "Tipo Doc#Categorización":                                 string;
    @Column()
    "Nro#Doc#Categorización":                                  string;
    @Column()
    Horario:                                                   string;
    @Column()
    "Inicio de Actividad":                                     string;
    @Column()
    "Director Médico y/o Responsable de la Atención de Salud": string;
    @Column()
    Estado:                                                    string;
    @Column()
    Situación:                                                 string;
    @Column()
    Condición:                                                 string;
    @Column()
    Inspección:                                                string;
    @Column()
    NORTE:                                                     string;
    @Column()
    ESTE:                                                      string;
    @Column()
    COTA:                                                      string;
    @Column()
    CAMAS:                                                     string;
    @Column()
    RUC:                                                       string;
  
}
