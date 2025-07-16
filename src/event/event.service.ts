import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { EventType } from '../event_type/entities/event_type.entity';
import { HumanCategory } from '../human_category/entities/human_category.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
    @InjectModel(EventType.name)
    private readonly eventTypeModel: Model<EventType>,
    @InjectModel(HumanCategory.name)
    private readonly humanCategoryModel: Model<HumanCategory>
  ) {}
  async create(createEventDto: CreateEventDto) {
    try {
      const { event_type_id, humon_category_id } = createEventDto;
    if (!isValidObjectId(event_type_id)) {
      throw new BadRequestException('Region ID notogri');
    }
    const regioin = await this.eventTypeModel.findById(event_type_id);
    if (!regioin) {
      throw new BadRequestException('Bunday region yoq');
    }
    if (!isValidObjectId(humon_category_id)) {
      throw new BadRequestException('Human ID notogri');
    }
    const regioin2 = await this.humanCategoryModel.findById(humon_category_id);
    if (!regioin2) {
      throw new BadRequestException('Bunday region yoq');
    }
      return await this.eventModel.create(createEventDto);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.eventModel.find().populate("event_type_id").populate("humon_category_id");
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.eventModel.findById(id).populate('');
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    try {
      return await this.eventModel.findByIdAndUpdate(id, updateEventDto, {
        new: true,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.eventModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
}
