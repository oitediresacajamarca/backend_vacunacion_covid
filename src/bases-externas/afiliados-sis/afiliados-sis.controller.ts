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
  async devolver_padron_filtro(@Param('renipress') renipress: string, @Body() filtro: any) {

   /* console.log(filtro)
    console.log(renipress)*/

    let resp = []
    if (filtro.hoy == true) {
      resp = await this.devolver_por_vacunar_total(renipress)

    } else {
      resp = await this.devolver_total(renipress)
    }
    let dosis: any[] = [1,2,3,4]
    let dosis1=[], dosis2=[], dosis3=[], dosis4=[]

    if (dosis.findIndex(data => { return data == 3 }) >= 0) {
      dosis3 = resp.filter(dat => {
        return dat.Dosis_3 == 0&&dat.Dosis_1 == 1 &&dat.Dosis_2 == 1
      })
    }

    if (dosis.findIndex(data => { return data == 2 }) >= 0) {
      dosis2 = resp.filter(dat => {
        return dat.Dosis_2 == 0 &&dat.Dosis_1 == 1
      })
    }

  if (dosis.findIndex(data => { return data == 1 }) >= 0) {
      dosis1 =  resp.filter(dat => {
        return dat.Dosis_1 == 0
      })
    }



    if (dosis.findIndex(data => { return data == 4 }) >= 0) {
      dosis4 = resp.filter(dat => {
        return dat.Dosis_4 == 0&&dat.Dosis_1 == 1 &&dat.Dosis_2 == 1&&dat.Dosis_3==1
      })
    }
    resp=[...dosis2,...dosis3,...dosis4,...dosis1]
    let resa=[]


    if(filtro.incluye_rezagados==2){
      resa= resp.filter(re=>{
        return re.dias_retraso==0
      })
    }else{
      resa=resp
    }

    return resa;
  }

  async devolver_por_vacunar_total(renipress: string) {
    let resp: any[] = [];
    resp = await this.padronrep.find({
      where: [{
        Renipress_Padron: renipress,
        Fec_Min_2: LessThanOrEqual(new Date()), Dosis_2: 0, Dosis_3: 0
      },
      { Renipress_Padron: renipress, Fec_Min_3: LessThanOrEqual(new Date()), Dosis_3: 0 },
      { Renipress_Padron: renipress, Dosis_1: 0 }
      ]
    })
    return resp;
  }

  async devolver_total(renipress: string) {
    let resp: any[] = [];
    resp = await this.padronrep.find({ where: { Renipress_Padron: renipress } })
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

          }

        }).catch((err) => { })
        count = count + 1

        //  res.Renipress_Padron=enc.afi_idEESSAdscripcion
      } catch (e) {

      }
      //      await  this.padronrep.save(res);

    })


  }

}
