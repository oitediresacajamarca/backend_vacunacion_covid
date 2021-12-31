import { Controller, Get, Param } from '@nestjs/common';
import { CentroVacunacionService } from './centro-vacunacion.service';

@Controller('centro-vacunacion')
export class CentroVacunacionController {

    constructor(private centros: CentroVacunacionService) {

    }

    @Get('listar_por_ubigeo/:ubigeo')
    async listar_por_ubigeo(@Param('ubigeo') ubigeo: string) {

        const resp = await this.centros.devolver_centro_por_ubigeo(ubigeo)
        return resp;
    }
    @Get('listar_por_ubigeo_tipo_centro/:ubigeo/:tipo_centro')
    async listar_por_ubigeo_tipo_centro(@Param('ubigeo') ubigeo: string,@Param('tipo_centro') tipo_centro: string) {

        const resp = await this.centros.devolver_centro_por_ubigeo_tipo_centro(ubigeo,tipo_centro)
        return resp;
    }
    @Get('devolver_por_id/:id')
    async devolver_por_id(@Param('id') id: string) {

        const resp = await this.centros.devolver_por_id(id)
        return resp;
    }




}
