import { PartialType } from '@nestjs/swagger';
import { CreateMPrimaReqDto } from './create-m-prima-req.dto';

export class UpdateMPrimaReqDto extends PartialType(CreateMPrimaReqDto) {}
