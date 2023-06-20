import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Recepcione {
    @PrimaryGeneratedColumn('uuid')
    id:string 
    @Column({name: 'folio'})
    folio: string

    @Column({name: 'estado_pedido'})
    estado_pedido_: string

    @Column({name: 'fecha_llegada'})
    date_llegada: string

    @Column({name: 'fecha_creacion'})
    date_create: string

    @Column({name: 'fecha_actualizacion'})
    date_update: string
}



