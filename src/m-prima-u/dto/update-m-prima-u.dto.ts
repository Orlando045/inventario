import { PartialType } from '@nestjs/swagger';
import { CreateMPrimaUDto } from './create-m-prima-u.dto';

export class UpdateMPrimaUDto extends PartialType(CreateMPrimaUDto) {}
