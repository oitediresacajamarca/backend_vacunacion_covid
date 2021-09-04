import { EntityRepository, Repository } from "typeorm";
import { UnoEntity } from "./uno.entity";

@EntityRepository()
export class UnoRepository extends Repository<UnoEntity> {}
