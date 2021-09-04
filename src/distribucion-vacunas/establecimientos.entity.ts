import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Establecimientos')

export class EstablecimientosEntity {

    @Column()

    Institución: string;

    @PrimaryColumn()
    Codigo_Unico: string;
    @Column()
    Nombre_del_establecimiento: string;
    @Column()
    Clasificacion: string;
    @Column()
    Tipo: string;
    @Column()
    Departamento: string;
    @Column()
    Provincia: string;
    @Column()
    Distrito: string;
    @Column()
    UBIGEO: string;
    @Column()
    Direccion: string;
    @Column()
    Codigo_DISA: number;
    @Column()
    SubRegion: string;
    @Column()
    Codigo_Red: number;
    @Column()
    Codigo_Microrred: number;
    @Column()
    DISA: string;
    @Column()
    Red: string;
    @Column()
    MicroRed: string;
    @Column()
    Codigo_UE: number;
    @Column()
    Unidad_Ejecutora: string;
    @Column()
    Categoria: string;
    @Column()
    Telefono: string;
    @Column()
    Tipo_Doc_Categorizacion: string;
    @Column()
    Nro_Doc_Categorización: string;
    @Column()
    Horario: string;
    @Column()
    Inicio_de_Actividad: string;
    @Column()
    Director_Medico_Responsable: string;
    @Column()
    Estado: string;
    @Column()
    Situacion: string;
    @Column()
    Condicion: string;
    @Column()
    Inspeccion: string;
    @Column()
    NORTE: string;
    @Column()
    ESTE: string;
    @Column()
    COTA: string;
    @Column()
    CAMAS: string;
    @Column()
    RUC: string;
 
}
