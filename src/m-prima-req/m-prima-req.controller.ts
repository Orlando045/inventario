import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MPrimaReqService } from './m-prima-req.service';
import { CreateMPrimaReqDto } from './dto/create-m-prima-req.dto';
import { UpdateMPrimaReqDto } from './dto/update-m-prima-req.dto';

@Controller('m-prima-req')
export class MPrimaReqController {
  constructor(private readonly mPrimaReqService: MPrimaReqService) {}

  @Post()
  create(@Body() createMPrimaReqDto: CreateMPrimaReqDto) {
    return this.mPrimaReqService.create(createMPrimaReqDto);
  }

  @Get()
  findAll() {
    return this.mPrimaReqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mPrimaReqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMPrimaReqDto: UpdateMPrimaReqDto) {
    return this.mPrimaReqService.update(+id, updateMPrimaReqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mPrimaReqService.remove(+id);
  }
}
