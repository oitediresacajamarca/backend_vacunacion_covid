import { Controller, Get, Param } from '@nestjs/common';
import { Like, Not } from 'typeorm';
import { EstablecimientosRepository } from '../establecimientos.repository';

@Controller('distribucion-vacunas/establecimiento')
export class EstablecimientoController {

    constructor(private establecimientor: EstablecimientosRepository) {

    }
    @Get('ubigeo_provincia/:ubigeo')
    async establecimiento_por_provincia(@Param('ubigeo') ubigeo: string) {
        
        const resp = await this.establecimientor.find({ where: { UBIGEO:Like( ubigeo+'%') ,Institución:Not( 'PRIVADO')} })
        return resp;
    }
    @Get('ubigeo_distrito_np/:ubigeo')
    async establecimiento_por_distrito(@Param('ubigeo') ubigeo: string) {
        
        const resp = await this.establecimientor.find({ where: { UBIGEO:Like( ubigeo+'%') ,Institución:Not( 'PRIVADO')} })
        return resp;
    }

    @Get('microred/:ubigeo')
    async establecimiento_microred_por_ubigeo(@Param('ubigeo') ubigeo: string) {
        
        const resp = await this.establecimientor.find({ where: { UBIGEO:Like( ubigeo+'%') ,Institución:Not( 'PRIVADO')} })
        return resp;
    }

    @Get('codigo_microred/:codigo_microred')
    async establecimiento_por_microred(@Param('codigo_microred') codigo_microred: string) {
        console.log(codigo_microred)
        
        const resp = await this.establecimientor.find({ where: { Codigo_Microrred:codigo_microred ,Institución:Not( 'PRIVADO')} })
        return resp;
    }


}
