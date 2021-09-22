import { PrimaryGeneratedColumn } from "typeorm";

export interface StockIpress {

    id: number;
    FECHA: number;
    CODIGO_UNICO: string;
    STOCK_VIALES: number;
    STOCK_DOSIS: number;
    FECHA_DESCONGELAMIENTO: Date;
    FECHA_MAXIMA_USO: Date;
    NUMERO_DOCUMENTO_RESPONSABLE: String;
    NOMBRES_RESPONSABLE: String;
    OBSERVACION: String;
}
