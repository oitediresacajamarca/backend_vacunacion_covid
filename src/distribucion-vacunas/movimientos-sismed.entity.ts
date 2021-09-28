import { Column, ViewEntity } from "typeorm";


@ViewEntity('vacunas_covid')
export class MovimientosSismedEntity {
    @Column()
    MOVCODITIP: string;
    @Column()
    MOVNUMERO: string;
    @Column()
    ALMCODIORG: string;
    @Column()
    almdes: string;
    @Column()
    ALMCODIDST: string;
    @Column()
    IPRESS_DESTINO: string;
    @Column()
    MOVTIPODCI: string;
    @Column()
    MOVNUMEDCI: string;
    @Column()
    MOVTIPODCO: string;
    @Column()
    MOVNUMEDCO: string;
    @Column()
    MOVFECHREC: Date;
    @Column()
    MOVTOT: number;
    @Column()
    MOVREFE: string;
    @Column()
    MOVFECHREG: Date;
    @Column()
    MOVFECHULT: Date;
    @Column()
    MOVSITUA: string;
    @Column()
    MOVFFINAN: string;
    @Column()
    MOVNUMEITE: string;
    @Column()
    MEDCOD: number;
    @Column()
    MEDREGSAN: string;
    @Column()
    MEDLOTE: string;
    @Column()
    MOVPRECIO: number;
    @Column()
    MOVCANTID: number;
    @Column()
    MEDFECHVTO: Date;
    @Column()
    MOVTOTAL: number;
    @Column()
    SITUACION_DET: string;
    @Column()
    DOCORIGEN: string;
    @Column()
    DOCDESTINO: string;
    @Column()
    medicament: string;
    @Column()
    presentaci: string;
    @Column()
    concentrac: string;
    @Column()
    ff: string;
    @Column()
    tipcctdsc: string;
    @Column()
    distdes: string;
    @Column()
    provdes: string;
    @Column()
    almubigeo: string;
    @Column()
    estrategic: string;
    @Column()
    DOSIS_VIAL: number;
    @Column()
    CANTIDAD_DOSIS: number;
    @Column()
    FABRICANTE: string;


}
