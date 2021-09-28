import { EntityRepository, Repository } from "typeorm";
import { RecepcionAnexosEntity } from "./recepcion-anexos.entity";

@EntityRepository(RecepcionAnexosEntity)
export class RecepcionAnexosRepository extends Repository<RecepcionAnexosEntity>{}
