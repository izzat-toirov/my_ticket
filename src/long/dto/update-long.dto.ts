import { PartialType } from '@nestjs/swagger';
import { CreateLongDto } from './create-long.dto';

export class UpdateLongDto extends PartialType(CreateLongDto) {}
