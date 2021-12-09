import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MicroredEntity } from './microred.entity';

@Controller('microred')
export class MicroredController {

    constructor(@InjectRepository(MicroredEntity, 'MAESTROS')
    private microrep: Repository<MicroredEntity>) {

    }
    @Get('listar')
    async listar_microred() {
        const resp = await this.microrep.find()
        return resp
    }
    @Get('listar_por_idred/:idred')
    async listar_por_idred(@Param('idred') idred :string) {
        const resp = await this.microrep.find({where:{ID_RED:idred}})
        return resp
    }
}
