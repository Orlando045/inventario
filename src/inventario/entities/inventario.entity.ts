import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventario {


    @PrimaryGeneratedColumn('uuid')
    id: string;
    unique: true

    @Column('text' )
    Almacen: string;

    @Column('text')
    Anaquel: string;

    @Column('text')
    Description: string;

    @Column('text')
    MateriaPrima: string;

    @Column('uuid', {
        unique: true
    })
    idUnico: string;

    @Column('date')
    FechaCaducidad: string;

    @Column('numeric')
    Cantidad: number;

    @Column('date')
    FechaCreate: string;

    @Column('date')
    FechaUpdate: string;
  Product: any;

  // @ManyToMany(() => Inventario, inventario => inventario.Product)
  // Inventario : Inventario
}

