import { EntityRepository, Repository } from "typeorm";
import { MicroredEntity } from "./microred.entity";

@EntityRepository(MicroredEntity)
export class MicroredRepository extends Repository<MicroredEntity> {}
