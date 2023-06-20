import { Injectable } from '@nestjs/common';
import { CreateFabPedidoDto } from './dto/create-fab-pedido.dto';
import { UpdateFabPedidoDto } from './dto/update-fab-pedido.dto';

@Injectable()
export class FabPedidosService {
  create(createFabPedidoDto: CreateFabPedidoDto) {
    return 'This action adds a new fabPedido';
  }

  findAll() {
    return `This action returns all fabPedidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fabPedido`;
  }

  update(id: number, updateFabPedidoDto: UpdateFabPedidoDto) {
    return `This action updates a #${id} fabPedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} fabPedido`;
  }
}
