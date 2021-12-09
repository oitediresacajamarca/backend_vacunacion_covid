import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IpressEntity } from './ipress.entity';

@Controller('ipress')
export class IpressController {

    constructor(@InjectRepository(IpressEntity, 'MAESTROS')
    private ipressrep: Repository<IpressEntity>) {

    }
    @Get('listar')
    async listar_ipress() {
        const resp = await this.ipressrep.find()
        return resp
    }
    @Get('listar_por_id_microred/:ID_MICRORED')
    async listar_ipress_id_microred(@Param('ID_MICRORED' ) ID_MICRORED:String) {
        const resp = await this.ipressrep.find({where:{ID_MICRORED:ID_MICRORED}})
        return resp
    }
}
