import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { NotFoundError } from 'rxjs';
import { isUUID } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';



@Injectable()
export class PedidosService {

  private readonly logger = new Logger(PedidosService.name);

  createPedido(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const newPedido = this.pedidoRepository.create(createPedidoDto)
    return this.pedidoRepository.save(newPedido)
  }


  //aqui entran los datos que se guarden
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) { }
  //
  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find({where: {deleted: false}});
  }

 

  async updatePedidos(id: string,updateProductDto:UpdatePedidoDto ) {
    console.log(id)
    const pedido : Pedido = await this.pedidoRepository.findOne({where: {id : id}});
    if (!pedido){
      throw new Error('no se pudo actualizar')
    }
    
    const temp = Object.assign(pedido)
    let resp;
    try{
      console.log("objeto a guardar: "+JSON.stringify(temp))

      resp = await this.pedidoRepository.save(temp);
    }
    catch(error) {
      console.log(error)
    }
    return resp;
  }

  async findOne(term: string) {
    let pedido: Pedido;

    if(isUUID(!term)){
      pedido = await this.pedidoRepository.findOne({where: { id: term, deleted: false}});
    }else{
      pedido = await this.pedidoRepository.findOne({where: { folio: term, deleted: false}});

    }
    if (!pedido) {
      throw new NotFoundException('Este pedido no existe en la base de datos')
    }

    return pedido;
  }

  async remove(id: string) {
    //borrado logico
    const pedido = await this.pedidoRepository.findOne({where :{id:id}});
    pedido.deleted = true;
    const result = this.pedidoRepository.save(pedido)
    console.log("registro eliminado: "+JSON.stringify(result))
    return {
      msj: "Registro eliminado",
      status: true
    }
//borrado fisico
    // const pedido = await this.findOne(id)
    // await  this.pedidoRepository.remove(pedido);
  }
}
  // const removePedido : this.pedidoRepository.remove(removePedido)   
    // return this.pedidoRepository.remove(removePedido)
  // async findOneDate( dateupdate: string) {
  //   const pedido = await this.pedidoRepository.findBy({ dateupdate: dateupdate});
  //   if (!pedido) {
  //     throw new Error('Este pedido no existe en la base de datos')
  //   }

  //   return pedido;
  // }

