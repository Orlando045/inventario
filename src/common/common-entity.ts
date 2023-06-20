import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export abstract class CommonEntity {
    @PrimaryGeneratedColumn()
    id: string
    @Column({
        name: 'date_create',
        type: 'timestamp with time zone',
        nullable: true,
    })
    dateCreate: Date;

    @Column({
        name: 'date_update',
        type: 'timestamp with time zone',
        nullable: true,
    })
    dateUpdate: Date;
    @Column()
    delete: boolean

    // @BeforeInsert()
    // const datecurrent = this.dateCreate()
    // datecurrent = this.dateUpdate()


    // @BeforeUpdate()


}