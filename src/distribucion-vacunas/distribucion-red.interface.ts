export interface DistribucionRed {
    id:                    number;
    COD_PROVINCIA:         string;
    CANTIDAD_DOSIS:        number;
    CANTIDAD_VIALES:       number;
    FECHA_DE_DISTRIBUCION: Date;
    FABRICANTE:            string;
    DESDE_ALMACEN:         string;
    FECHA_VENCIMIENTO:     Date;
    TIPO_DOCUMENTO:        string;
    NUMERO_DOCUMENTO:      string;
}
