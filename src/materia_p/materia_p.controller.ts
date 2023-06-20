import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaPService } from './materia_p.service';
import { CreateMateriaPDto } from './dto/create-materia_p.dto';
import { UpdateMateriaPDto } from './dto/update-materia_p.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import * as cors from 'cors';

@Controller('materia-p')
@ApiTags( 'MATERIA_P')
export class MateriaPController {
  constructor(private readonly materiaPService: MateriaPService) {}

  @Post()
  create(@Body() createMateriaPDto: CreateMateriaPDto) {
    return this.materiaPService.createMateria(createMateriaPDto);
  }

  @Get()
  findAll() {
    return this.materiaPService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaPService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaPDto: UpdateMateriaPDto) {
    return this.materiaPService.update(id, updateMateriaPDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaPService.remove(+id);
  }
}
