import { EntityRepository, Repository } from "typeorm";
import { EstablecimientosEntity } from "./establecimientos.entity";

@EntityRepository(EstablecimientosEntity)
export class EstablecimientosRepository extends Repository<EstablecimientosEntity> {}
