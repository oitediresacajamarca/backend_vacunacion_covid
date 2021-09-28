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


}
