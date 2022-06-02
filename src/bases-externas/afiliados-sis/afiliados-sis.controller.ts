import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PadronReniecEntity } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.entity';
import { PadronReniec } from 'src/distribucion-vacunas/padron-reniec/padron-reniec.interface';
import { Equal, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { AfiliadosSisEntity } from '../afiliados-sis.entity';
import { RenaesEntity } from '../renaes.entity';

@Controller('afiliados-sis')
export class AfiliadosSisController {
  constructor(@InjectRepository(AfiliadosSisEntity, 'AFILIADOS_SIS')
  private afiliadosrep: Repository<AfiliadosSisEntity>,
    @InjectRepository(RenaesEntity, 'AFILIADOS_SIS')
    private renaesrep: Repository<RenaesEntity>,
    @InjectRepository(PadronReniecEntity, 'default')
    private padronrep: Repository<PadronReniecEntity>) {


  }

  @Get('1')
  async devolver_adiliados() {
    let resp = await this.afiliadosrep.find({ where: { afi_apmaterno: 'OCAS', afi_appaterno: 'MIRANDA' } })
    return resp;
  }
  @Get('renaes')
  async devolver_renaes() {
    let resp = await this.renaesrep.find()
    return resp;
  }
  @Get('padrones/:renipress')
  async devolver_padron(@Param('renipress') renipress: string) {
    
    let resp = await this.padronrep.find({ where: { Renipress_Padron: renipress } })
    return resp;
  }
  @Post('padrones/:renipress')
  async devolver_padron_filtro(@Param('renipress') renipress: string ,@Body() filtro:any) {



    let resp=[]
    if(filtro.hoy==true){
     resp = await this.padronrep.find({ where: [{ Renipress_Padron: renipress ,
      Fec_Min_2:LessThanOrEqual(new Date()),Dosis_2:0,Dosis_3:0},
      { Renipress_Padron: renipress ,        Fec_Min_3:LessThanOrEqual(new Date()),Dosis_3:0},
      { Renipress_Padron: renipress,Dosis_1:0}
       
    ] }) 

  }
  else{

    

    resp = await this.padronrep.find({ where: { Renipress_Padron: renipress } })

  }
    return resp;
  }

  @Get('actualizar')
  async actualizar_renipress_padron() {
    let resp: PadronReniec[] = await this.padronrep.find({ where: { Edad: 41 } })
    let count = 0
    resp.forEach(async res => {
      try {
        this.afiliadosrep.findOne({ where: { afi_DNI: res.Numero_Doc } }).then(async (enc) => {
          if (enc != undefined) {
            res.Renipress_Padron = enc.afi_idEESSAdscripcion
            await this.padronrep.save({}, { data: res });
          } else {
            console.log(count)
          }

        }).catch((err) => { })
        count = count + 1
        console.log(count)
        //  res.Renipress_Padron=enc.afi_idEESSAdscripcion
      } catch (e) {

      }
      //      await  this.padronrep.save(res);

    })

 
  }

}
