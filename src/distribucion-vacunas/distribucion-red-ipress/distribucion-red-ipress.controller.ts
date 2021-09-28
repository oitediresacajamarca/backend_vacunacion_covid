import { Controller, Get, Param } from '@nestjs/common';
import { DistribucionIpressRepository } from '../distribucion-ipress.repository';

@Controller('distribucion-vacunas/distribucion-red-ipress')
export class DistribucionRedIpressController {
    constructor(private DitribucionIpressRepository: DistribucionIpressRepository) {

    }
    @Get('eliminar/:id')
    async eliminar_distribucion(
        @Param('id')
        id: any) {
       
        let respuesta = await this.DitribucionIpressRepository.delete({ id: id })
        return respuesta

    }
}
