import { JoinAttribute } from "typeorm/query-builder/JoinAttribute.js";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    detalle: string;

    @ManyToMany(() => User)
    @JoinTable({name:'roles_user'})
    users: User[]
}
