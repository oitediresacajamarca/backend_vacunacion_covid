import { Entity, PrimaryColumn } from "typeorm";
@Entity('Un')
export class UnEntity {
    @PrimaryColumn()
    id:string;
}
