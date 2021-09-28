import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CuadroAlmacenRedRepository } from '../cuadro-almacen-red.repository';
import { DistribucionEstrategiaRedRepository } from '../distribucion-estrategia-red.repository';
import { ProvinciaRepository } from '../provincia.repository';

@Controller('distribucion-vacunas/distribucion-estrategia-red')
export class DistribucionEstrategiaRedController {

    constructor(private distribucion: DistribucionEstrategiaRedRepository, private PROVINCIAS: ProvinciaRepository
        ,private cuadror:CuadroAlmacenRedRepository) {

    }
    @Get('listar')
    async devolver_distribucion_estrategia_red() {

        let resp = await this.distribucion.find()

        let datos

        datos = await Promise.all(resp.map(async data => {
            let provincia = await this.PROVINCIAS.findOne({ where: { ID_PROVINCIA: data.COD_PROVINCIA } })

            return { ...data, ...provincia }
        }))
        return datos;
    }

    @Post('nuevo')
    async nuevo_distribucion_estrategia_red(
        @Body() nuevo: any
    ) {
        let resp = this.distribucion.create()
        resp.COD_PROVINCIA = nuevo.PROVINCIA.ID_PROVINCIA
        resp.CANTIDAD_VIALES = nuevo.CANTIDAD_VIALES
        resp.CANTIDAD_DOSIS = nuevo.CANTIDAD_DOSIS
        resp.FECHA = nuevo.FECHA
        resp.TIPO_DOCUMENTO = nuevo.TIPO_DOCUMENTO.name
        resp.NUMERO_DOCUMENTO = nuevo.NUMERO_DOCUMENTO
        resp.FABRICANTE = nuevo.FABRICANTE.NOMBRE


        await this.distribucion.save(resp)

        return resp;
    }



    @Get('eliminar/:id')
    async eliminar_distribucion_estrategia_red(
        @Param('id') id: any
    ) {
        let resp = await this.distribucion.delete({ ID: id })
        return resp;
    }

    @Get('cuadro_listar')
    async devolver_cuadro() {

        let resp = await this.cuadror.find()

  
        return resp;
    }
}
