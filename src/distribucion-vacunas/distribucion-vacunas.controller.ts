import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DistribucionIpressRepository } from './distribucion-ipress.repository';
import { DistritoRepository } from './distrito.repository';
import { EstablecimientosRepository } from './establecimientos.repository';
import { ProvinciaRepository } from './provincia.repository';

@Controller('distribucion-vacunas')
export class DistribucionVacunasController {

    constructor(private provincias: ProvinciaRepository, private distritos: DistritoRepository,
        private distribucion_ip: DistribucionIpressRepository, private estabecs: EstablecimientosRepository) {


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

        console.log(cod_provincia)
        const resp = this.distritos.find({ ID_PROVINCIA: cod_provincia })


        return resp
    }

    @Get('distribucion-ipress/listar')
    listar_distribucion_ipress() {


        const resp = this.distribucion_ip.find()


        return resp
    }

    @Get('distribucion-ipress/listar/:CODIGO_UNICO')
    listar_distribucion_ipress_poripress( @Param('CODIGO_UNICO') CODIGO_UNICO:string) {

        const resp = this.distribucion_ip.find({CODIGO_UNICO:CODIGO_UNICO})

        return resp
    }


    @Get('establecimiento_ubigeo/:ubigeo')
    listar_establecimiento_por_ubigeo(
        @Param('ubigeo') ubigeo: string

    ) {


        const resp = this.estabecs.find({ UBIGEO: ubigeo,Institución:'GOBIERNO REGIONAL' })


        return resp
    }



    @Post('distribucion_ipress/nuevo/')
    async registrar_ingreso(
     
        @Body() body: any

    ) {

console.log(body) 

      const guard=  this.distribucion_ip.create({CANTIDAD_RECIBIDA:body.NUM_VIALES_CANTIDAD,
            CODIGO_UNICO:body.CODIGO_UNICO,DOSIS:'1',FABRICANTE:body.FABRICANTE,
            FECHA_ENTREGA:body.FECHA,FECHA_VENCIMIENTO:body.FECHA_VENCIMIENTO,
            NUM_LOTE:body.NUM_LOTE,OBSERVACION:body.OBSERVACION,
            STOCK_ACTUAL:body.STOCK_ACTUAL
        })

      await  this.distribucion_ip.save(guard)

           
        const resp =  await this.distribucion_ip.find({where:{CODIGO_UNICO:body.CODIGO_UNICO+''}})
        console.log(resp)
        return resp
    }


}
