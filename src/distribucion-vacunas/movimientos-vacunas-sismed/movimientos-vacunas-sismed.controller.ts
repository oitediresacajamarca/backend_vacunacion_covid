import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { get } from 'superagent';
import { Any, Between, In, Like, Repository } from 'typeorm';
import { MovimientosSismedEntity } from '../movimientos-sismed.entity';
import { VacunadosCovidFastEntity } from '../vacunados-covid/vacunados-covid-fast.entity';


@Controller('movimientos-vacunas-sismed')
export class MovimientosVacunasSismedController {
    constructor(@InjectRepository(MovimientosSismedEntity, 'sismed')
    private movimientos_sis: Repository<MovimientosSismedEntity>, @InjectRepository(VacunadosCovidFastEntity, 'default')
        private vacunados_r: Repository<VacunadosCovidFastEntity>) {

    }
    ALMACENES_RED = [{ NOMBRE_RED: 'CAJAMARCA', COD_ALMACEN: '007S03', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'CAJABAMBA', COD_ALMACEN: '007S06', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'SAN PABLO', COD_ALMACEN: '007S08', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'SAN MIGUEL', COD_ALMACEN: '007S07', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'CONTUMAZA', COD_ALMACEN: '007S14', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'CELENDIN', COD_ALMACEN: '007S04', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'SAN MARCOS', COD_ALMACEN: '007S05', COD_ALM_ORG: '007A01' },
    { NOMBRE_RED: 'CHOTA', COD_ALMACEN: '010S05', COD_ALM_ORG: '010A01' },
    { NOMBRE_RED: 'HUALGAYOC', COD_ALMACEN: '010S02', COD_ALM_ORG: '010A01' },
    { NOMBRE_RED: 'SANTA CRUZ', COD_ALMACEN: '010S01', COD_ALM_ORG: '010A01' },
    { NOMBRE_RED: 'CUTERVO', COD_ALMACEN: '', COD_ALM_ORG: '012A01' },
    { NOMBRE_RED: 'JAEN', COD_ALMACEN: '016S02', COD_ALM_ORG: '016A01' },
    { NOMBRE_RED: 'SAN IGNACIO', COD_ALMACEN: '016S01', COD_ALM_ORG: '016A01' },



    ]

    PROVINICIAS: any[] = [{ "ID_PROVINCIA": "0601", "ID_DEPARTAMENTO": "06", "NOMBRE": "CAJAMARCA" },
     { "ID_PROVINCIA": "0602", "ID_DEPARTAMENTO": "06", "NOMBRE": "CAJABAMBA" },
      { "ID_PROVINCIA": "0603", "ID_DEPARTAMENTO": "06", "NOMBRE": "CELENDIN" }, 
      { "ID_PROVINCIA": "0604", "ID_DEPARTAMENTO": "06", "NOMBRE": "CHOTA" }, 
      { "ID_PROVINCIA": "0605", "ID_DEPARTAMENTO": "06", "NOMBRE": "CONTUMAZA" },
       { "ID_PROVINCIA": "0606", "ID_DEPARTAMENTO": "06", "NOMBRE": "CUTERVO" }, 
       { "ID_PROVINCIA": "0607", "ID_DEPARTAMENTO": "06", "NOMBRE": "HUALGAYOC" },
        { "ID_PROVINCIA": "0608", "ID_DEPARTAMENTO": "06", "NOMBRE": "JAEN" },
         { "ID_PROVINCIA": "0609", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN IGNACIO" }, { "ID_PROVINCIA": "0610", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN MARCOS" }, { "ID_PROVINCIA": "0611", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN MIGUEL" }, { "ID_PROVINCIA": "0612", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN PABLO" }, { "ID_PROVINCIA": "0613", "ID_DEPARTAMENTO": "06", "NOMBRE": "SANTA CRUZ" }]

    @Get('dosis_distribuidas_cenares')
    async devolver_dosis_distribuidas_por_cenares() {

        let Fabricantes: any[] = ['SINOPHARM', 'PFIZER', 'ASTRAZENECA']

        const resp = await Promise.all(Fabricantes.map(async fabricante => {
            let cuenta_entr = 0;
            let cuenta_sal = 0;

            let movimientos_entradas: any[] = await this.movimientos_sis.find({ where: { MOVCODITIP: 'E', FABRICANTE: fabricante, ALMCODIORG: '99662' } })


            movimientos_entradas.map(movimiento => {
                cuenta_entr = cuenta_entr + movimiento.CANTIDAD_DOSIS

            })


            let movimientos_salidas: any[] = await this.movimientos_sis.find({ where: { MOVCODITIP: 'S', FABRICANTE: fabricante,ALMCODIORG:Any(['016A01','007A01','010A01','012A01']) } })


            movimientos_salidas.map(movimiento => {
                cuenta_sal = cuenta_sal + movimiento.CANTIDAD_DOSIS

            })



            return { fabricante, CANTIDAD_DOSIS_CENARES: cuenta_entr, CANTIDAD_DOSIS_DISTRIBUIDAS: cuenta_sal, DIFERENCIA_DOSIS: cuenta_entr - cuenta_sal }
        }))

        return resp


    }


    @Get('reporte_stock_regiones')
    async reporte_stock_regiones() {

        let intem_rep = await Promise.all(this.PROVINICIAS.map(async PROVINICIA => {
            let cantidad_asignada_pfizer = 0
            let cantidad_asignada_sinopharm = 0
            let cantidad_asignada_astrazeneca = 0

            let g = this.ALMACENES_RED.find((r) => { return r.NOMBRE_RED == PROVINICIA.NOMBRE })

            console.log(g)

            let distribuciones_pfizer_salidas: any[] = await this.movimientos_sis.find({ where: { ALMCODIORG: g.COD_ALM_ORG, ALMCODIDST: g.COD_ALMACEN, FABRICANTE: 'PFIZER', MOVCODITIP: 'S' } })

            distribuciones_pfizer_salidas.map(mov => {

                cantidad_asignada_pfizer = cantidad_asignada_pfizer + mov.CANTIDAD_DOSIS

            })

            let distribuciones_sibopharam_salidas: any[] = await this.movimientos_sis.find({ where: { ALMCODIORG: g.COD_ALM_ORG, ALMCODIDST: g.COD_ALMACEN, FABRICANTE: 'SINOPHARM', MOVCODITIP: 'S' } })

            distribuciones_sibopharam_salidas.map(mov => {

                cantidad_asignada_sinopharm = cantidad_asignada_sinopharm + mov.CANTIDAD_DOSIS

            })


            let distribuciones_astraxeneca_salidas: any[] = await this.movimientos_sis.find({ where: { ALMCODIORG: g.COD_ALM_ORG, ALMCODIDST: g.COD_ALMACEN, FABRICANTE: 'ASTRAZENECA', MOVCODITIP: 'S' } })

            distribuciones_astraxeneca_salidas.map(mov => {

                cantidad_asignada_astrazeneca = cantidad_asignada_astrazeneca + mov.CANTIDAD_DOSIS

            })
            let cant = 0

            cant = 0;

            let acum: any = {
                PROVINICIA: PROVINICIA.NOMBRE, CANT_ASIG_PFIZER: cantidad_asignada_pfizer,
                CANT_ASIG_SINOPHARM: cantidad_asignada_sinopharm, CANT_ASIG_ASTRAZENECA: cantidad_asignada_astrazeneca,

            }

            let vac_1_sinopharm: any[] = await this.vacunados_r.find({ where: { Fabricante: 'SINOPHARM', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('1%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_SINO_1: cant }

            cant = 0;

            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'SINOPHARM', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('2%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_SINO_2: cant }

            cant = 0;

            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'SINOPHARM', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('3%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_SINO_3: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'PFIZER', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('1%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_PFIZER_1: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'PFIZER', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('2%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_PFIZER_2: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'PFIZER', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('3%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_PFIZER_3: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'ASTRAZENECA', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('1%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_ASTRAZENECA_1: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'ASTRAZENECA', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('2%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_ASTRAZENECA_2: cant }

            cant = 0;
            vac_1_sinopharm = await this.vacunados_r.find({ where: { Fabricante: 'ASTRAZENECA', provincia_establecimiento: PROVINICIA.NOMBRE, dosis_aplicada: Like('3%') } })
            vac_1_sinopharm.map(data => {
                cant = cant + data.cantidad
            })

            acum = { ...acum, DOSIS_ADM_ASTRAZENECA_3: cant }


            return acum;


        }))

        return intem_rep




    }


    @Get('distribuciones_red/:COD_PROVINCIA')
    async distribuciones_red(@Param('COD_PROVINCIA') COD_PROVINCIA: string) {
        const resp = await this.movimientos_sis.find({ where: { almubigeo_origen: Like(COD_PROVINCIA + '%'), MOVCODITIP: 'E' } })
        return resp;

    }

    @Get('distribuciones_mircored/:COD_PROVINCIA')
    async distribuciones_microred(@Param('COD_PROVINCIA') COD_PROVINCIA: string) {
        const resp = await this.movimientos_sis.find({ where: { almubigeo_origen: Like(COD_PROVINCIA + '%'), MOVCODITIP: 'E' } })
        return resp;

    }

    @Get('distribuciones_mircored_ipress/:renipress_microred')
    async distribuciones_mircored_ipress(@Param('renipress_microred') renipress_microred: string) {
        const resp = await this.movimientos_sis.find({ where: { almubigeo_origen: Like('%' + renipress_microred), MOVCODITIP: 'S' } })
        return resp;

    }

    @Post('movimientos_sismed_almacen_especializado/:amlcod')
    async movimientos_sismed_almacenes_especilisados(@Param('amlcod') amlcod: string, @Body() filtro: any) {
        console.log(filtro)
        const resp = await this.movimientos_sis.find({
            where: {
                ALMCODIDST: amlcod, MOVCODITIP: 'E', FABRICANTE: filtro.fabricante.NOMBRE
                , MOVFECHREG: Between(filtro.desde, filtro.hasta)
            }, order: { MOVFECHREG: 'DESC' }
        })
        return resp;
    }
}
