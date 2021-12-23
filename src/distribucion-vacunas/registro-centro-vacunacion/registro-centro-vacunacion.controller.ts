import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RegistroCentroVacunacionService } from './registro-centro-vacunacion.service';

@Controller('registro-centro-vacunacion')
export class RegistroCentroVacunacionController {

    constructor(private regis: RegistroCentroVacunacionService) {

    }

    @Get('listar_por_centro/:id_centro')
    async devolver_por_centro(@Param('id_centro') id_centro: string) {
        let resp = await this.regis.devolver_registros_por_centro(id_centro)

        return resp;

    }

    @Post('nuevo/:id_centro')
    async nuevo_registro_por_centro(@Param('id_centro') id_centro: number, @Body() datos: any) {
        let resp = await this.regis.nuevo_registros_por_centro(id_centro, datos)

        return resp;

    }
    @Delete('eliminar')
    async eliminar_registro(@Body() id: any) {
        let resp = await this.regis.eliminar_regsitro(id)

        return resp;

    }
    @Post('ubigeofecha/:ubigeo')
    async ubigeofecha(@Body() fecha: any, @Param('ubigeo') ubigeo: any) {
 
        let resp = await this.regis.devolver_registrado_ubigeofecha(ubigeo, fecha.fecha)

        return resp;

    }

}
