import { EntityRepository, Repository } from "typeorm";
import { DistribucionEstrategiaRedEntity } from "./distribucion-estrategia-red.entity";

@EntityRepository(DistribucionEstrategiaRedEntity)
export class DistribucionEstrategiaRedRepository extends Repository<DistribucionEstrategiaRedEntity>{}
