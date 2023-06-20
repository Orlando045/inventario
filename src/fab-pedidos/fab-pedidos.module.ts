import { Module } from '@nestjs/common';
import { FabPedidosService } from './fab-pedidos.service';
import { FabPedidosController } from './fab-pedidos.controller';

@Module({
  controllers: [FabPedidosController],
  providers: [FabPedidosService]
})
export class FabPedidosModule {}
