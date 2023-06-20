import { Injectable } from '@nestjs/common';
import { CreateMPrimaUDto } from './dto/create-m-prima-u.dto';
import { UpdateMPrimaUDto } from './dto/update-m-prima-u.dto';

@Injectable()
export class MPrimaUService {
  create(createMPrimaUDto: CreateMPrimaUDto) {
    return 'This action adds a new mPrimaU';
  }

  findAll() {
    return `This action returns all mPrimaU`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mPrimaU`;
  }

  update(id: number, updateMPrimaUDto: UpdateMPrimaUDto) {
    return `This action updates a #${id} mPrimaU`;
  }

  remove(id: number) {
    return `This action removes a #${id} mPrimaU`;
  }
}
