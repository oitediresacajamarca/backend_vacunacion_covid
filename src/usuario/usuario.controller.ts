import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
    constructor(private usuario_rep: UsuarioService) { }

    @Get('listar')
    listar() {

        const resp = this.usuario_rep.listar();
        return resp

    }

    @Post('login')
    login(@Body() login)  {


        const resp = this.usuario_rep.login(login);
        return resp

    }
}
