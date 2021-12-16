import { Body, Controller, Get, Header, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RecepcionAnexos } from './recepcion-anexos.interface';
import { RecepcionAnexosService } from './recepcion-anexos.service';
import { Request } from 'express';

@Controller('distribucion-vacunas/recepcion-anexos')
export class RecepcionAnexosController {

    constructor(private recepionService: RecepcionAnexosService) {

    }

    @Get('listar')
    listar_todos() {
        const respuesta = this.recepionService.devolver_listado_anexos()
        return respuesta
    }


    @Post('nuevo')
    nuevo_registro(@Body() body :any)  {
       
        const respuesta = this.recepionService.nuevo_listado(body)
        return respuesta
    }
    @Post('eliminar')
    async eliminar_registro(@Body() body :any)  {
       
       
        const respuesta =await this.recepionService.eliminar(body)
        return respuesta
    }

   
    @Post('upload/anexo1')
    @UseInterceptors(FileInterceptor('file10', { dest: './upload/anexo1' }))
    uploadFile1(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {


        return file;

    }

    @Post('upload/anexo2')
    @UseInterceptors(FileInterceptor('file13', { dest: './upload/anexo2' }))
    uploadFile2(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {

        return file;

    }

    @Post('upload/anexo3')
    @UseInterceptors(FileInterceptor('file14', { dest: './upload/anexo3' }))
    uploadFile3(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {

        return file;

    }
}
