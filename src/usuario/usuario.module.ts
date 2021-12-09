import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  providers: [UsuarioService],
  imports:[TypeOrmModule.forFeature([UsuarioEntity],'USUARIOS')],
  controllers: [UsuarioController]

})
export class UsuarioModule {

}
