import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EventType } from './entities/event_type.entity';
import { Model } from 'mongoose';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name) private readonly eventTypeModel: Model<EventType>
  ) {}
  async create(createEventTypeDto: CreateEventTypeDto) {
    try {
      return await this.eventTypeModel.create(createEventTypeDto);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.eventTypeModel.find().populate("parent_event_type_id");
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.eventTypeModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateEventTypeDto: UpdateEventTypeDto) {
    try {
      return await this.eventTypeModel.findByIdAndUpdate(id, updateEventTypeDto, {
        new: true,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.eventTypeModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }

}
