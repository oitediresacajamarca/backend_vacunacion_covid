import { EntityRepository, Repository } from "typeorm";
import { DistribucionRedEntity } from "./distribucion-red.entity";

@EntityRepository(DistribucionRedEntity)
export class DistribucionRedRepository extends Repository<DistribucionRedEntity> {}
