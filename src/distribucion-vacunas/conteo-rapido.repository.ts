import { EntityRepository, Repository } from "typeorm";
import { ConteoRapidoEntity } from "./conteo-rapido.entity";

@EntityRepository(ConteoRapidoEntity)
export class ConteoRapidoRepository extends Repository<ConteoRapidoEntity> {}
