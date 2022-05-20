import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PadronReniecEntity } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.entity';
import { PadronReniec } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.interface';
import { Repository } from 'typeorm';
import { AfiliadosSisEntity } from '../afiliados-sis.entity';
import { RenaesEntity } from '../renaes.entity';

@Controller('afiliados-sis')
export class AfiliadosSisController {
    constructor(@InjectRepository(AfiliadosSisEntity, 'AFILIADOS_SIS')
    private afiliadosrep: Repository<AfiliadosSisEntity> ,
    @InjectRepository(RenaesEntity, 'AFILIADOS_SIS')
    private renaesrep: Repository<RenaesEntity>,
    @InjectRepository(PadronReniecEntity, 'default')
    private padronrep: Repository<PadronReniecEntity>) {


    }

    @Get('1')
    async devolver_adiliados() {
       let resp= await this.afiliadosrep.find({where:{afi_apmaterno:'OCAS',afi_appaterno:'MIRANDA'}})
       return resp;
    }
    @Get('renaes')
    async devolver_renaes() {
       let resp= await this.renaesrep.find()
       return resp;
    }
    @Get('padron')
    async devolver_padron() {
       let resp= await this.padronrep.find({where:{Numero_Doc:'41935041'}})
       return resp;
    }

    @Get('actualizar')
    async actualizar_renipress_padron() {
        let resp: PadronReniec[] = await this.padronrep.find({ })
let count=0
  resp.forEach(async res => {
      try{
         /*    this.afiliadosrep.findOne({ where: { afi_DNI: res.Numero_Doc } }).then(async (enc) => {
                if(enc!=undefined){
                  res.Renipress_Padron=enc.afi_idEESSAdscripcion
                  await  this.padronrep.save(res);
                }else{
                    console.log(count)
                
                }
          
            }).catch((err) => {})*/
            count=count+1
            console.log(count)
          //  res.Renipress_Padron=enc.afi_idEESSAdscripcion
         
           
          
        }catch (e){
          
        }
    //      await  this.padronrep.save(res);
       
        })

        console.log('termino')
    }

}
