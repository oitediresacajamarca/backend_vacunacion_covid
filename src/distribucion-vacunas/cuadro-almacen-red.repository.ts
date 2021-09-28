import { EntityRepository, Repository } from "typeorm";
import { CuadroAlmacenRedEntity } from "./cuadro-almacen-red.entity";

@EntityRepository(CuadroAlmacenRedEntity)
export class CuadroAlmacenRedRepository extends Repository<CuadroAlmacenRedEntity> {}
