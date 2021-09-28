import { EntityRepository, Repository } from "typeorm";
import { MovimientosSismedEntity } from "./movimientos-sismed.entity";

@EntityRepository(MovimientosSismedEntity)
export class MovimientosSismedRepository extends Repository<MovimientosSismedEntity> {}
