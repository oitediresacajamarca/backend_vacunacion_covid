import { EntityRepository, Repository } from "typeorm";
import { EnviosRedEntity } from "./envios-red.entity";

@EntityRepository(EnviosRedEntity)
export class EnviosRedRepository extends Repository<EnviosRedEntity> {}
