import { EntityRepository, Repository } from "typeorm";
import { ProvinciaEntity } from "./provincia.entity";

@EntityRepository(ProvinciaEntity)
export class ProvinciaRepository extends Repository<ProvinciaEntity> {


}
