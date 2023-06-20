import { Logger } from "@nestjs/common/services";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'folio', nullable:true})
    folio: string

    @Column({name: 'Protocolo', nullable:true})
    protocolo: string

    @Column({name: 'cantidad', nullable:true})
    cantidad: number

    @Column({name:'fecha_creacion', nullable:true})
    datecreate: string

    @Column({name:'Actualizar_fecha',  nullable:true})
    dateupdate: string

    @Column( {name:' borrador', type : 'boolean', default: false})
    deleted : boolean
  

}