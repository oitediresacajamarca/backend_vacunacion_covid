import { EntityRepository, Repository } from "typeorm";
import { EnviosIpressyEntity } from "./envios-ipressy.entity";

@EntityRepository(EnviosIpressyEntity)
export class EnviosIpressRepository extends Repository<EnviosIpressyEntity> {}
