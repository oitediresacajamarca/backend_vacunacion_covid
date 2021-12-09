import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedEntity } from './red.entity';
import { RedRepository } from './red.repository';

@Controller('red')
export class RedController {

    constructor( @InjectRepository(RedEntity, 'MAESTROS')
    private red_rep: Repository<RedEntity>) {

    }
    @Get('listar')
    async listar_red() {
        const resp = await this.red_rep.find()
        return resp

    }
}
