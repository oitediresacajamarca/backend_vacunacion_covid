import { Body, Controller, Post } from '@nestjs/common';
import { MovimientoVacunasComplService } from './movimiento-vacunas-compl.service';

@Controller('movimiento-vacunas-compl')
export class MovimientoVacunasComplController {


    constructor(private movserv: MovimientoVacunasComplService) {

    }

    @Post('asignar')
    async asiganar(@Body() body: any) {

        const resp = await this.movserv.asignar(body.NUMERO_MOVIMIENTO_SIMED, body)
        return resp;
    }

}
