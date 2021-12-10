import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { get } from 'https';
import { Between, Like, Repository } from 'typeorm';
import { ConteoRapidoRepository } from './conteo-rapido.repository';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';
import { DistribucionRedRepository } from './distribucion-red.repository';
import { DistritoRepository } from './distrito.repository';
import { EnviosIpressRepository } from './envios-ipress.repository';
import { EnviosRedRepository } from './envios-red.repository';
import { EstablecimientosRepository } from './establecimientos.repository';
import { LoteVacunaRepository } from './lote-vacuna.repository';
import { MovimientosSismedEntity } from './movimientos-sismed.entity';
import { MovimientosSismedRepository } from './movimientos-sismed.repository';
import { ProvinciaRepository } from './provincia.repository';
import { StockIpress } from './stock-ipress.interface';
import { StockIpressRepository } from './stock-ipress.repository';

@Controller('distribucion-vacunas')
export class DistribucionVacunasController {

    constructor(private provincias: ProvinciaRepository, private distritos: DistritoRepository,
        private distribucion_ip: DistribucionIpressRepository, private estabecs: EstablecimientosRepository,
        private distribucion_red: DistribucionRedRepository, private conteos: ConteoRapidoRepository,
        private envios_ipress: EnviosIpressRepository, private envio_red: EnviosRedRepository,
        private stock_ipress: StockIpressRepository, @InjectRepository(MovimientosSismedEntity, 'sismed')
        private movimientos_sis: Repository<MovimientosSismedEntity>, private lotes: LoteVacunaRepository
    ) {


    }
    @Get('provincias')
    listar_provincia() {
        const resp = this.provincias.find()


        return resp
    }

    @Get('distrito')
    listar_distrito() {
        const resp = this.distritos.find()


        return resp
    }

    @Get('distrito/:ubigeo')
    listar_distrito_ubigeo(@Param('ubigeo') ubigeo: string) {
        const resp = this.distritos.find({ ID_DISTRITO: ubigeo })


        return resp
    }

    @Get('distrito/listar-por-provincia/:cod_provincia')
    listar_distrito_provincia(@Param('cod_provincia') cod_provincia: string) {


        const resp = this.distritos.find({ ID_PROVINCIA: cod_provincia })


        return resp
    }

    @Get('distribucion-ipress/listar')
    async listar_distribucion_ipress() {


        const resp = await this.distribucion_ip.find()
        let ret = Promise.all(resp.map(async dato => {

            let est = await this.estabecs.findOne({ where: { Codigo_Unico: dato.CODIGO_UNICO } })

            return { ...dato, est }




        }))



        return ret
    }

    @Get('distribucion-ipress/listar/:CODIGO_UNICO')
    listar_distribucion_ipress_poripress(@Param('CODIGO_UNICO') CODIGO_UNICO: string) {

        const resp = this.distribucion_ip.find({ CODIGO_UNICO: CODIGO_UNICO })

        return resp
    }


    @Get('establecimiento_ubigeo/:ubigeo')
    listar_establecimiento_por_ubigeo(
        @Param('ubigeo') ubigeo: string

    ) {


        const resp = this.estabecs.find({ UBIGEO: ubigeo, Institución: 'GOBIERNO REGIONAL' })


        return resp
    }



    @Post('distribucion_ipress/nuevo/')
    async registrar_ingreso(

        @Body() body: any

    ) {



        const guard = this.distribucion_ip.create(
            {
                CANTIDAD_RECIBIDA_DOSIS: body.CANTIDAD_DOSIS,
                CANTIDAD_RECIBIDA_VIALES: body.CANTIDAD_VIALES,
                CODIGO_UNICO: body.IPRESS.Codigo_Unico,
                FABRICANTE: body.fabricante.NOMBRE,
                TIPO_DOCUMENTO: body.TIPO_DOCUMENTO.code,
                NUMERO_DOCUMENTO: body.NUMERO_DOCUMENTO,
                FECHA_DISTRIBUCION: body.FECHA_DISTRIBUCION,
                FECHA_VENCIMIENTO: body.FECHA_VENCIMIENTO,
                DESDE: body.provincia.NOMBRE
            }
        )

        await this.distribucion_ip.save(guard)

        const resp = await this.distribucion_ip.find({ where: { CODIGO_UNICO: body.CODIGO_UNICO + '' } })

        return resp
    }

    @Post('distribucion_ipress_desde_mic/nuevo/')
    async registrar_ingreso_desde_mic(

        @Body() body: any

    ) {

        console.log(body)

        const guard = this.distribucion_ip.create(
            {
                CANTIDAD_RECIBIDA_DOSIS: body.CANTIDAD_DOSIS,
                CANTIDAD_RECIBIDA_VIALES: body.CANTIDAD_VIALES,
                CODIGO_UNICO: body.IPRESS.Codigo_Unico,
                FABRICANTE: body.fabricante.NOMBRE,
                TIPO_DOCUMENTO: body.TIPO_DOCUMENTO.code,
                NUMERO_DOCUMENTO: body.NUMERO_DOCUMENTO,
                FECHA_DISTRIBUCION: body.FECHA_DISTRIBUCION,
                FECHA_VENCIMIENTO: body.FECHA_VENCIMIENTO,
                DESDE: body.provincia.NOMBRE
            }
        )

        await this.distribucion_ip.save(guard)

        const resp = await this.distribucion_ip.find({ where: { CODIGO_UNICO: body.CODIGO_UNICO + '' } })

        return resp
    }



    @Post('conteo-rapido/nuevo/')
    async registrar_conteo(

        @Body() body: any

    ) {



        const guard = this.distribucion_ip.create({

        })

        await this.distribucion_ip.save(guard)


        const resp = await this.distribucion_ip.find({ where: { CODIGO_UNICO: body.CODIGO_UNICO + '' } })

        return resp
    }



    @Post('distribucion_red/nuevo/')
    async registrar_ingreso_a_red(

        @Body() body: any

    ) {
        let p = this.distribucion_red.create()



        p.CANTIDAD_DOSIS = body.CANTIDAD_DOSIS;
        p.CANTIDAD_VIALES = body.CANTIDAD_VIALES
        p.FECHA_VENCIMIENTO = body.FECHA_VENCIMIENTO
        p.FECHA_DESCONGELAMIENTO = body.FECHA_DESCONGELAMIENTO
        p.TIPO_DOCUMENTO = body.TIPO_DOCUMENTO
        p.NUMERO_DOCUMENTO = body.NUMERO_DOCUMENTO
        p.COD_PROVINCIA = body.provincia.ID_PROVINCIA
        p.FECHA_DE_DISTRIBUCION = body.FECHA_DISTRIBUCION
        p.DESDE_ALMACEN = body.almacen.name
        p.FABRICANTE = body.fabricante.NOMBRE

        await this.distribucion_red.save(p)


        return this.distribucion_red.find()




    }



    @Get('distribucion_red/listar/')
    async listar_ingreso_a_red(



    ) {

        const respuesta = await this.distribucion_red.find()
        return respuesta

    }


    @Get('distribucion_red/listar_/')
    async listar_ingreso_a_red_(
    ) {

        const respuesta: any = await this.distribucion_red.find()
        let ret = await Promise.all(respuesta.map(async respu => {


            let PROVINICA = await this.provincias.findOne({ where: { ID_PROVINCIA: respu.COD_PROVINCIA } })

            return { ...PROVINICA, ...respu }

        }))



        return ret;

    }



    @Get('distribucion_red/listar_id/:id')
    async listar_ingreso_a_red_id(
        @Param('id') id: any
    ) {


        const respuesta: any = await this.distribucion_red.find({ where: { id: id } })
        let ret = await Promise.all(respuesta.map(async respu => {


            let PROVINICA = await this.provincias.findOne({ where: { ID_PROVINCIA: respu.COD_PROVINCIA } })

            return { ...PROVINICA, ...respu }

        }))



        return ret;

    }

    @Get('distribucion_red/eliminar/:id')
    async eliminar_distribucion_a_red_id(
        @Param('id') id: any
    ) {


        const respuesta: any = await this.distribucion_red.delete({ id: id })




        return respuesta;

    }


    @Post('conteo_rapido/nuevo/')
    async ingresar_nuevo_conteo(

        @Body() nuevo: any

    ) {

        const nuevo_cont = this.conteos.create({
            PROVINCIA: nuevo.PROVINCIA.NOMBRE, CANTIDAD: nuevo.CANTIDAD, DISTRITO: nuevo.DISTRITO, FABRICANTE: nuevo.FABRICANTE.NOMBRE,
            FECHA: nuevo.FECHA, UBIGEO: nuevo.DISTRITO, FECHA_REGISTRO: new Date(), DOSIS_APLICADA: ''
        })

        await this.conteos.save(nuevo_cont)

        const respuesta = await this.conteos.find({ where: { UBIGEO: nuevo.DISTRITO } })
        return respuesta

    }



    @Get('conteo_rapido/detalle/:ubigeo')
    async listar_conteo_rapido(

        @Param('ubigeo') ubigeo: any

    ) {


        const respuesta = await this.conteos.find({ where: { UBIGEO: ubigeo } })
        return respuesta

    }

    @Get('conteo_rapido/detalle/eliminar/:id')
    async eliminar_conteo_rapido(

        @Param('id') id: any

    ) {


        const respuesta = await this.conteos.delete({ ID: id })
        return respuesta

    }


    @Get('envios-ipress/listar/')
    async listar_envios(


    ) {
        const resp = await this.envios_ipress.find()

        return resp
    }


    @Get('envios-red/listar/:id')
    async listar_envios_red(
        @Param('id') id: any

    ) {

        const resp = await this.envio_red.find({ where: { ID_DISTRIBUCION: id } })

        return resp
    }

    @Post('envios-red/nuevo/')
    async envios_red_nuevo(
        @Body() nuevo: any

    ) {




        const nuevo_envio = this.envio_red.create()

        nuevo_envio.ID_DISTRIBUCION = nuevo.ID_DISTRIBUCION

        nuevo_envio.FECHA_ENVIO = nuevo.FECHA_ENVIO

        nuevo_envio.CANTIDAD_VIALES = nuevo.CANTIDAD_VIALES

        nuevo_envio.CANTIDAD_DOSIS = nuevo.CANTIDAD_DOSIS

        nuevo_envio.FECHA_MAXIMA_USO = nuevo.FECHA_VENCIMIENTO

        nuevo_envio.FECHA_DESCONGELAMIENTO = nuevo.FECHA_DESCONGELAMIENTO

        await this.envio_red.save(nuevo_envio);


        const resp = await this.envio_red.find()

        return resp
    }


    @Post('stock-ipress/nuevo')
    async nuevo_stock_envio(
        @Body() body: any

    ) {

        let nuevo_stock = this.stock_ipress.create()



        console.log(body)
        nuevo_stock.CODIGO_UNICO = body.CODIGO_UNICO.Codigo_Unico
        nuevo_stock.FECHA = body.FECHA
        nuevo_stock.FECHA_DESCONGELAMIENTO = body.FECHA_DESCONGELAMIENTO
        nuevo_stock.FECHA_MAXIMA_USO = body.FECHA_VENCIMIENTO
        nuevo_stock.NOMBRES_RESPONSABLE = body.RESPONSABLE
        nuevo_stock.STOCK_DOSIS = body.STOCK_ACTUAL_DOSIS
        nuevo_stock.STOCK_VIALES = body.STOCK_ACTUAL_VIALES
        nuevo_stock.OBSERVACION = body.OBSERVACION

        await this.stock_ipress.save(nuevo_stock)






    }





    @Get('stock-ipress/listar_por_ipress/:codigo_unico')
    async listar_stock_ipress(
        @Param('codigo_unico') codigo_unico: any

    ) {


        let listas = await this.stock_ipress.find({ where: { CODIGO_UNICO: codigo_unico } })


        return listas;







    }


    @Get('envios-red/eliminar/:id')
    async eliminar_envio_red(
        @Param('id') id: any

    ) {


        let listas = await this.envio_red.delete({ id: id })


        return listas;

    }


    @Get('distribucion-sismed/listar')
    async distribucion_sismed(


    ) {


        let lotes = await this.lotes.find()

        lotes.map(lote => {


        })

        let listas = await this.movimientos_sis.find({
            where: { IPRESS_DESTINO: 'ALMACEN ESPECIALIZADO', MOVCODITIP: 'E' }
            , order: {
                MOVFECHREG: 'DESC'

            }
        })


        return listas;

    }


    @Post('distribucion-sismed/filtro')
    async distribucion_sismed_filtrar(

        @Body() filtro: any
    ) {


        let lotes = await this.lotes.find()

        lotes.map(lote => {


        })


        let listas = await this.movimientos_sis.find({
            where: {
                IPRESS_DESTINO: 'ALMACEN ESPECIALIZADO', MOVCODITIP: 'E', almubigeo: filtro.almacen.code
                , MOVFECHREG: Between(filtro.desde, filtro.hasta)
            }, order: {
                MOVFECHREG: 'DESC'

            }
        }

        )
        return listas;
    }


    @Get('movimientos/RED/:COD_RED')
    async cargar_movimientos_red(@Param('COD_RED') COD_RED: string) {

        
        const resp = await this.movimientos_sis.find({
            where: { provdes: Like(COD_RED + '%'),MOVCODITIP:'S',ALMCODIORG:'007A01'},order:{MOVFECHREG:'DESC'}
        })


        return resp


    }




}
