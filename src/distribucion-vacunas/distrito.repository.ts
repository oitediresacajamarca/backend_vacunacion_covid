import { EntityRepository, Repository } from "typeorm";
import { DistritoEntity } from "./distrito.entity";

@EntityRepository(DistritoEntity)
export class DistritoRepository extends Repository<DistritoEntity>{


}
