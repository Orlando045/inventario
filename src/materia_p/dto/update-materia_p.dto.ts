import { PartialType } from '@nestjs/swagger';
import { CreateMateriaPDto } from './create-materia_p.dto';

export class UpdateMateriaPDto extends PartialType(CreateMateriaPDto) {}
