import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { get } from 'superagent';
import { Like, Repository } from 'typeorm';
import { MovimientosSismedEntity } from '../movimientos-sismed.entity';
import { VacunadosCovidFastEntity } from '../vacunados-covid/vacunados-covid-fast.entity';


@Controller('movimientos-vacunas-sismed')
export class MovimientosVacunasSismedController {
    constructor(@InjectRepository(MovimientosSismedEntity, 'sismed')
    private movimientos_sis: Repository<MovimientosSismedEntity>, @InjectRepository(VacunadosCovidFastEntity, 'default')
        private vacunados_r: Repository<VacunadosCovidFastEntity>) {

    }

    PROVINICIAS: any[] = [{ "ID_PROVINCIA": "0601", "ID_DEPARTAMENTO": "06", "NOMBRE": "CAJAMARCA" }, { "ID_PROVINCIA": "0602", "ID_DEPARTAMENTO": "06", "NOMBRE": "CAJABAMBA" }, { "ID_PROVINCIA": "0603", "ID_DEPARTAMENTO": "06", "NOMBRE": "CELENDIN" }, { "ID_PROVINCIA": "0604", "ID_DEPARTAMENTO": "06", "NOMBRE": "CHOTA" }, { "ID_PROVINCIA": "0605", "ID_DEPARTAMENTO": "06", "NOMBRE": "CONTUMAZA" }, { "ID_PROVINCIA": "0606", "ID_DEPARTAMENTO": "06", "NOMBRE": "CUTERVO" }, { "ID_PROVINCIA": "0607", "ID_DEPARTAMENTO": "06", "NOMBRE": "HUALGAYOC" }, { "ID_PROVINCIA": "0608", "ID_DEPARTAMENTO": "06", "NOMBRE": "JAEN" }, { "ID_PROVINCIA": "0609", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN IGNACIO" }, { "ID_PROVINCIA": "0610", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN MARCOS" }, { "ID_PROVINCIA": "0611", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN MIGUEL" }, { "ID_PROVINCIA": "0612", "ID_DEPARTAMENTO": "06", "NOMBRE": "SAN PABLO" }, { "ID_PROVINCIA": "0613", "ID_DEPARTAMENTO": "06", "NOMBRE": "SANTA CRUZ" }]

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


            let movimientos_salidas: any[] = await this.movimientos_sis.find({ where: { MOVCODITIP: 'S', FABRICANTE: fabricante } })


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


            let distribuciones_pfizer_salidas: any[] = await this.movimientos_sis.find({ where: { almubigeo: Like(PROVINICIA.ID_PROVINCIA + '%'), FABRICANTE: 'PFIZER', MOVCODITIP: 'S' } })

            distribuciones_pfizer_salidas.map(mov => {

                cantidad_asignada_pfizer = cantidad_asignada_pfizer + mov.CANTIDAD_DOSIS

            })

            let distribuciones_sibopharam_salidas: any[] = await this.movimientos_sis.find({ where: { almubigeo: Like(PROVINICIA.ID_PROVINCIA + '%'), FABRICANTE: 'SINOPHARM', MOVCODITIP: 'S' } })

            distribuciones_sibopharam_salidas.map(mov => {

                cantidad_asignada_sinopharm = cantidad_asignada_sinopharm + mov.CANTIDAD_DOSIS

            })


            let distribuciones_astraxeneca_salidas: any[] = await this.movimientos_sis.find({ where: { almubigeo: Like(PROVINICIA.ID_PROVINCIA + '%'), FABRICANTE: 'ASTRAZENECA', MOVCODITIP: 'S' } })

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
        const resp = await this.movimientos_sis.find({ where: { COD_RENIPRES: amlcod, MOVCODITIP: 'E' }, order: { MOVFECHREG: 'DESC' } })
        return resp;
    }
}
