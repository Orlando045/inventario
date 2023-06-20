import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Put } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('pedidos')
@ApiTags( 'PEDIDOS')
export class PedidosController {
  private readonly logger = new Logger(PedidosController.name);
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.createPedido(createPedidoDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pedidosService.findOne(term);
  }
  // @Get(':dateUpdate')
  // findOneDate(@Param('dateUpdate') dateUpdate: string) {
  //   return this.pedidosService.findOne(dateUpdate);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.updatePedidos(id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(id)
    // return this.pedidosService.remove(id);
    // delete  
  }
}
