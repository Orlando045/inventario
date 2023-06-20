import { Injectable } from '@nestjs/common';
import { CreateMPrimaReqDto } from './dto/create-m-prima-req.dto';
import { UpdateMPrimaReqDto } from './dto/update-m-prima-req.dto';

@Injectable()
export class MPrimaReqService {
  create(createMPrimaReqDto: CreateMPrimaReqDto) {
    return 'This action adds a new mPrimaReq';
  }

  findAll() {
    return `This action returns all mPrimaReq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mPrimaReq`;
  }

  update(id: number, updateMPrimaReqDto: UpdateMPrimaReqDto) {
    return `This action updates a #${id} mPrimaReq`;
  }

  remove(id: number) {
    return `This action removes a #${id} mPrimaReq`;
  }
}
