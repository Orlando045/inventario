import { Injectable } from '@nestjs/common';
import { CreateAnaqueleDto } from './dto/create-anaquele.dto';
import { UpdateAnaqueleDto } from './dto/update-anaquele.dto';

@Injectable()
export class AnaquelesService {
  create(createAnaqueleDto: CreateAnaqueleDto) {
    return 'This action adds a new anaquele';
  }

  findAll() {
    return `This action returns all anaqueles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anaquele`;
  }

  update(id: number, updateAnaqueleDto: UpdateAnaqueleDto) {
    return `This action updates a #${id} anaquele`;
  }

  remove(id: number) {
    return `This action removes a #${id} anaquele`;
  }
}
