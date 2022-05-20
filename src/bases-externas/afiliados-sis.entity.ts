import { Column, Entity, ViewEntity } from "typeorm";

@ViewEntity('AFILIADOS_SIS')
export class AfiliadosSisEntity {
    @Column()
    afi_IDnumreg:                number;

    @Column()
    afi_disa:                    string;
    @Column()
    afi_tipoformato:             string;
    @Column()
    afi_numregafis:              string;
    @Column()
    afi_FecAfiliacion:           Date;
    @Column()
    afi_tipodocumento:           string;
    @Column()
    afi_DNI:                     string;
    @Column()
    afi_fecnac:                  Date;
    @Column()
    afi_idsexo:                  string;
    @Column()
    afi_appaterno:               string;
    @Column()
    afi_apmaterno:               string;
    @Column()
    afi_nombres:                 string;
    @Column()
    afi_idubigeo:                string;
    @Column()
    afi_idcentropoblado:         string;
    @Column()
    afi_direccion:               string;
    @Column()
    afi_idEESSAfiliacion:        string;
    @Column()
    afi_idEESSAdscripcion:       string;
    @Column()
    afi_idusuariocrea:           string;
    @Column()
    afi_feccrea:                 Date;
    @Column()
    afi_idusuarioact:            string;
    @Column()
    afi_fecAct:                  Date;
    @Column()
    afi_estado:                  string;
    @Column()
    afi_periodo:                 string;
    @Column()
    afi_mes:                     string;
    @Column()
    afi_DNIResponsable:          string;
    @Column()
    afi_ApellidosResponsable:    string;
    @Column()
    afi_NombresResponsable:      string;
    @Column()
    afi_disaAdscripcion:         string;
    @Column()
    afi_CodPais:                 string;
    @Column()
    afi_ValidaRENIECOnLine:      string;
    @Column()
    afi_TipoModificacion:        string;
    @Column()
    afi_idplan:                  string;
    @Column()
    FechaCopiaH5N1:              Date;
    @Column()
    IdTabla:                     number;
    @Column()
    afi_tipodocumentobensep:     string;
    @Column()
    afi_NroDocumentobensep:      string;
    @Column()
    afi_appaternobensep:         string;
    @Column()
    afi_apmaternobensep:         string;
    @Column()
    afi_nombresbensep:           string;
    @Column()
    afi_fecnacbensep:            Date;
    @Column()
    afi_idsexobensep:            string;
    @Column()
    afi_esgrupofocalizadoSisfoh: string;
    @Column()
    afi_ReniecValida:            string;
    @Column()
    afi_idNumRegAfiliacion:      number;
    @Column()
    afi_idNumRegInscripcion:     number;
    @Column()
    afi_estadoVinculacion:       string;
 
}
