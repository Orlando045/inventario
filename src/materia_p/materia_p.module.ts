import { Module } from '@nestjs/common';
import { MateriaPService } from './materia_p.service';
import { MateriaPController } from './materia_p.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaP, } from './entities/materia_p.entity';
import { RegistrarP } from './entities/registrar-partidas.entity';



@Module({
  controllers: [MateriaPController],
  providers: [MateriaPService],
  imports:[
    TypeOrmModule.forFeature([MateriaP, RegistrarP ])
  ],
  exports: []
})
export class MateriaPModule {}
