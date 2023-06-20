import { Logger } from "@nestjs/common/services";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'Titulo', nullable: true })
    name: string;

    @Column({ name: 'numeric' })
    estadoPedido: number;

    @Column({ name: 'fecha de creación', nullable: true }
    )
    fechaCreate: string;

    @Column({ name: 'ultima modificación', nullable: true })
    fechaUpdate: string;

    @Column({name:' borrador', type : 'boolean', default: false})
  deleted: boolean;

    // @Column('int', {
    //     default: 0
    // })
    // stock: number;

    // @Column('text', {
    //     array: true, nullable: true

    // })

    // sizes: string[];

    // @Column('text')
    // gender: string;
}
