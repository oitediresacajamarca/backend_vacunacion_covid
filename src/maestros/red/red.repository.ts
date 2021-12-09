import { EntityRepository, Repository } from "typeorm";
import { RedEntity } from "./red.entity";

@EntityRepository(RedEntity)
export class RedRepository extends Repository<RedEntity>{}
