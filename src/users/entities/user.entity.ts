import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'Nombre' })
    name: string

    @Column({ name: 'Edad' })
    age: string

    @Column({ name: 'Contraseña', nullable: true })
    password: string
}
