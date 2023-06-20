import { Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Entity } from "typeorm";
import { MateriaP } from "./materia_p.entity";

@Entity()
export class RegistrarP {


    
    @PrimaryGeneratedColumn( 'uuid')
    id : string

   @Column()
   materiaP: string

   @Column()
   cantidad: number

   @Column()
   dateCreate: Date

   @Column()
   dateupdate:Date

   @ManyToOne(
    ()=> MateriaP,
    (materiap)=> materiap.resgitro
   )
   materiap? : MateriaP;

   
}