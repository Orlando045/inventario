import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from './entities/inventario.entity';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService],
  imports:[TypeOrmModule.forFeature([Inventario]),ProductsService]
})
export class InventarioModule {}
