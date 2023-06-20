import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MPrimaUService } from './m-prima-u.service';
import { CreateMPrimaUDto } from './dto/create-m-prima-u.dto';
import { UpdateMPrimaUDto } from './dto/update-m-prima-u.dto';

@Controller('m-prima-u')
export class MPrimaUController {
  constructor(private readonly mPrimaUService: MPrimaUService) {}

  @Post()
  create(@Body() createMPrimaUDto: CreateMPrimaUDto) {
    return this.mPrimaUService.create(createMPrimaUDto);
  }

  @Get()
  findAll() {
    return this.mPrimaUService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mPrimaUService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMPrimaUDto: UpdateMPrimaUDto) {
    return this.mPrimaUService.update(+id, updateMPrimaUDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mPrimaUService.remove(+id);
  }
}
