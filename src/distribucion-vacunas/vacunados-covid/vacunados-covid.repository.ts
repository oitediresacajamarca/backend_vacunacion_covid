import { EntityRepository, Repository } from "typeorm";
import { VacunadosCovidEntity } from "./vacunados-covid.entity";

@EntityRepository(VacunadosCovidEntity)
export class VacunadosCovidRepository  extends Repository<VacunadosCovidEntity>{}
