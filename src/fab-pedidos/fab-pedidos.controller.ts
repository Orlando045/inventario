import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FabPedidosService } from './fab-pedidos.service';
import { CreateFabPedidoDto } from './dto/create-fab-pedido.dto';
import { UpdateFabPedidoDto } from './dto/update-fab-pedido.dto';

@Controller('fab-pedidos')
export class FabPedidosController {
  constructor(private readonly fabPedidosService: FabPedidosService) {}

  @Post()
  create(@Body() createFabPedidoDto: CreateFabPedidoDto) {
    return this.fabPedidosService.create(createFabPedidoDto);
  }

  @Get()
  findAll() {
    return this.fabPedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fabPedidosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFabPedidoDto: UpdateFabPedidoDto) {
    return this.fabPedidosService.update(+id, updateFabPedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fabPedidosService.remove(+id);
  }
}
