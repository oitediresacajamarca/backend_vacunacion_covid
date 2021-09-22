import { EntityRepository, Repository } from "typeorm";
import { StockIpressEntity } from "./stock-ipress.entity";

@EntityRepository(StockIpressEntity)
export class StockIpressRepository extends Repository<StockIpressEntity> {}
