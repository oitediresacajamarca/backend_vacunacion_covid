import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegistrosConProblemasDigitacionService } from './registros-con-problemas-digitacion.service';

@Controller('registros-con-problemas-digitacion')
export class RegistrosConProblemasDigitacionController {

    constructor(private casos_service:RegistrosConProblemasDigitacionService){

    }
    @Post('nuevo')
    async nuevo(@Body() data: any) {

       const resp=await this.casos_service.nuevo(data)
       console.log(data)

       return resp;

     

    }

    @Get('listar')
    async listar(@Body() data: any) {
       const resp=await this.casos_service.listar()

       return resp;     

    }

    
    @Get('listar_por_ubigeo/:ubigeo')
    async listar_por_ubigeo(@Param('ubigeo') ubigeo){
      const resp=await this.casos_service.listar_por_ubigeo(ubigeo)

      return resp;     



    }
}
