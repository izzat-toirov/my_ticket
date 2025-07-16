import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { isValidObjectId } from 'mongoose';

@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post()
  async create(@Body() createEventTypeDto: CreateEventTypeDto) {
    const { parent_event_type_id } = createEventTypeDto;
    if (!isValidObjectId(parent_event_type_id)) {
      throw new BadRequestException('EventType ID notogri');
    }
    const regioin = await this.eventTypeService.findOne(parent_event_type_id);
    if (!regioin) {
      throw new BadRequestException('Bunday EventType yoq');
    }
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(id, updateEventTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(id);
  }
}
