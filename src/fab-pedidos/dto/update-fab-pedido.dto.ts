import { PartialType } from '@nestjs/swagger';
import { CreateFabPedidoDto } from './create-fab-pedido.dto';

export class UpdateFabPedidoDto extends PartialType(CreateFabPedidoDto) {}
