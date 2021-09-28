import { Controller } from '@nestjs/common';
import { VacunadosCovidRepository } from './vacunados-covid.repository';

@Controller('vacunados-covid')
export class VacunadosCovidController {
    constructor( private vacundos_r:VacunadosCovidRepository){}
    contar(){
       
    }

}
