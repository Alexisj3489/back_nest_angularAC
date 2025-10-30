import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedidos_productos')
export class PedidoProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedidoId: number;

    @Column()
    productoId: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => Pedido, (ped) => ped.pedidoProducto)
    pedido: Pedido;

    @ManyToOne(() => Producto, (pro) => pro.pedidoProducto)
    producto: Producto; 
}