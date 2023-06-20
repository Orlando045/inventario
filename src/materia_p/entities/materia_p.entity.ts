import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RegistrarP } from "./registrar-partidas.entity";

@Entity()
export class MateriaP {
@PrimaryGeneratedColumn('uuid')
id : string;

@Column({name: 'nombre', nullable:true})
nombre : string;

@Column( {name: 'id_escaneo',type: 'character varying' ,nullable: true })
idunicoesc: string;

@Column()
description: string;

@Column()
dateCreate: string;

@Column()
dateUpdate: string;


@OneToMany(
    () => RegistrarP,
    (registrarP)=> registrarP.materiap,
    {cascade: true}
)
resgitro?: RegistrarP[];
   

}


