import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AfiliadosSisEntity } from 'src/bases-externas/afiliados-sis.entity';
import { RenaesEntity } from 'src/bases-externas/renaes.entity';
import { PadronReniecEntity } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.entity';
import { PadronReniec } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.interface';
import { Repository } from 'typeorm';

@Injectable()
export class PadronReniecService {
    constructor() { }

   
}
