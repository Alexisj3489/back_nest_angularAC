import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";   

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()   
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;
    
    @Column()   
    descripcion: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Categoria, (cat) => cat.productos)
    categoria: Categoria;

}
