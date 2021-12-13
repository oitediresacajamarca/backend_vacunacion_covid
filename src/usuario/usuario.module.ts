import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioRolEntity } from './usuario-rol.entity';

@Module({
  providers: [UsuarioService],
  imports:[TypeOrmModule.forFeature([UsuarioEntity,UsuarioRolEntity],'USUARIOS')],
  controllers: [UsuarioController]

})
export class UsuarioModule {

}
