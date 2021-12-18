import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {


    private roles: any[] = [{ "NOMBRE_ROL": "COORDINADOR DE INMUNIZACIONES DE RED", "COD_ROL": "CORD_INMUN_RED" }, { "NOMBRE_ROL": "COORDINADOR DE GESTION DE LA INFORMACION DE CENTRO DE VACUNACION", "COD_ROL": "CORD_GES_INF_CEN" }, { "NOMBRE_ROL": "COORDINADOR DE GESTION DE LA INFORMACION DE MICRORED", "COD_ROL": "CORD_GES_INF_MICRORED" }, { "NOMBRE_ROL": "COORDINADOR DE GESTION DE LA INFORMACION DE RED", "COD_ROL": "CORD_GES_INF_RED" }]
    constructor(private usuario_rep: UsuarioService) { }

    @Get('listar')
    listar() {

        const resp = this.usuario_rep.listar();
        return resp

    }

    @Get('listar_por_ambito/:ambito')
    async listar_por_ambito(@Param('ambito') ambito:string) {

        const resp = await this.usuario_rep.listar_por_ambito(ambito);
        return resp

    }

    @Get('listar_por_ubigeo/:ubigeo')
    async listar_por_ubigeo(@Param('ubigeo') ubigeo:string) {

        const resp = await this.usuario_rep.listar_por_ubigeo(ubigeo);
        return resp

    }

    
    @Get('listar_roles/')
    async listar_roles() {

  
        return this.roles

    }

    @Post('login')
    async login(@Body() login) {


        const resp = await this.usuario_rep.login(login);
    

        return resp

    }
    @Post('nuevo')
    async nuevo(@Body() nuevo:any) {


        const resp = await this.usuario_rep.nuevo_usuario(nuevo);
    

        return resp

    }
    @Delete('eliminar')
    async eliminar(@Body() nuevo:any) {
   
        const resp = await this.usuario_rep.eliminar(nuevo);   

        return resp

    }
}
