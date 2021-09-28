import { EntityRepository, Repository } from "typeorm";
import { LoteVacunaEntity } from "./lote-vacuna.entity";

@EntityRepository(LoteVacunaEntity)
export class LoteVacunaRepository extends Repository<LoteVacunaEntity> {}
