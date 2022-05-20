import { Column, Entity, ViewEntity } from "typeorm";

@ViewEntity('PADRON_RENIEC_VIEW')
export class PadronReniecEntity {
    @Column()
    Tipo_Doc:              number;
    @Column()
    Documento:             string;
    @Column()
    Numero_Doc:            string;
    @Column()
    Nombres:               string;
    @Column()
    Apellido_Paterno:      string;
    @Column()
    Apellido_Materno:      string;
    @Column()
    Edad:                  number;
    @Column()
    Sexo:                  string;
    @Column()
    Fecha_Nac_:            Date;
    @Column()
    Celular:               string;
    @Column()
    UBIGEO_RENIEC:         string;
    @Column()
    DISA:                  string;
    @Column()
    Departamento:          string;
    @Column()
    Provincia:             string;
    @Column()
    Distrito:              string;
    @Column()
    Dosis_1:               number;
    @Column()
    Fecha_Dosis_1:         string;
    @Column()
    Fabricante_1:          string;
    @Column()
    Lote_1:                string;
    @Column()
    Renaes_Dosis_1:        string;
    @Column()
    Dosis_2:               number;
    @Column()
    Fecha_Dosis_2:         string;
    @Column()
    Fabricante_2:          string;
    @Column()
    Lote_2:                string;
    @Column()
    Renaes_Dosis_2:        string;
    @Column()
    Dosis_3:               number;
    @Column()
    Fecha_Dosis_3:         string;
    @Column()
    Fabricante_3:          string;
    @Column()
    Lote_3:                string;
    @Column()
    Renaes_Dosis_3:        string;
    @Column()
    Dosis_4:               string;
    @Column()
    Fecha_Dosis_4:         string;
    @Column()
    Fabricante_4:          string;
    @Column()
    Lote_4:                string;
    @Column()
    Renaes_Dosis_4:        string;
    @Column()
    ubigeo_inei:           string;
    @Column()
    Padron:                string;
    @Column()
    Renipress_Padron:      string;
    @Column()
    Usuario_Actualizacion: string;

}
function ViewEntityEntity(arg0: string) {
    throw new Error("Function not implemented.");
}

