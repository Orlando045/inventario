import { Module } from '@nestjs/common';
import { RecepcionesService } from './recepciones.service';
import { RecepcionesController } from './recepciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recepcione } from './entities/recepcione.entity';

@Module({
  controllers: [RecepcionesController],
  providers: [RecepcionesService],
  imports: [
    TypeOrmModule.forFeature([Recepcione])
  ],
  exports:[]
})
export class RecepcionesModule {}
