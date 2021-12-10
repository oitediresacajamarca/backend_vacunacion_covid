import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, SimpleConsoleLogger } from 'typeorm';
import { CuadroAlmacenRedRepository } from '../cuadro-almacen-red.repository';
import { DistribucionEstrategiaRedRepository } from '../distribucion-estrategia-red.repository';
import { MovimientosSismedEntity } from '../movimientos-sismed.entity';
import { ProvinciaRepository } from '../provincia.repository';

@Controller('distribucion-vacunas/distribucion-estrategia-red')
export class DistribucionEstrategiaRedController {

    constructor(private distribucion: DistribucionEstrategiaRedRepository, private PROVINCIAS: ProvinciaRepository
        , private cuadror: CuadroAlmacenRedRepository, @InjectRepository(MovimientosSismedEntity, 'sismed')
        private movimientos_sis: Repository<MovimientosSismedEntity>) {

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

    @Get('listar_por_red_fabricante/:red/:fabricante')
    async devolver_distribucion_estrategia_filtro_red_fabricante(@Param('red') red: string, @Param('fabricante') fabricante: string) {


        if (red == '1') {
            red = ''
        }
        if (fabricante == '1') {
            fabricante = ''
        }

        let resp = await this.distribucion.find({ where: { COD_PROVINCIA: Like(red + '%'), FABRICANTE: Like(fabricante + '%') },order:{FECHA:'DESC'} })

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
        //   resp.TIPO_DOCUMENTO = nuevo.TIPO_DOCUMENTO.name
        //   resp.NUMERO_DOCUMENTO = nuevo.NUMERO_DOCUMENTO
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

        let resp: any[] = await this.cuadror.find()


        let par: any

        par = await Promise.all(resp.map(async dist => {

            let provinicas: any[]
            provinicas = await this.movimientos_sis.find({ where: { almubigeo: Like(dist.ID_PROVINCIA + '%'), MOVCODITIP: 'S' } })
            let acum = 0
            provinicas.map(provincia => {
                acum = acum + provincia.CANTIDAD_DOSIS

            })

            return { ...dist, CANTIDAD_DOSIS_POR_ALMACEN: acum }





        }))

        //   this.movimientos_sis.find({where:{almubigeo:}})


        return par;
    }

    @Get('cuadro_listar_por_fabricante/:fabricante')
    async devolver_cuadro_por_fabricante(@Param('fabricante') fabricante: string) {

        let resp: any[] = await this.cuadror.find({ where: { FABRICANTE: fabricante } })


        let par: any

        par = await Promise.all(resp.map(async dist => {

            let provinicas: any[]
            provinicas = await this.movimientos_sis.find({ where: { almubigeo: Like(dist.ID_PROVINCIA + '%'), MOVCODITIP: 'S', FABRICANTE: fabricante } })
            let acum = 0
            provinicas.map(provincia => {
                acum = acum + provincia.CANTIDAD_DOSIS

            })

            return { ...dist, CANTIDAD_DOSIS_POR_ALMACEN: acum }





        }))

        //   this.movimientos_sis.find({where:{almubigeo:}})


        return par;
    }


    async devolver_cuadro_1() {

        let resp = await this.cuadror.find()


        return resp;
    }

}
