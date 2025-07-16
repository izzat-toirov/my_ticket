import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './entities/ticket.entity';
import { Seat } from '../seat/entities/seat.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>,
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
    @InjectModel(Seat.name) private readonly seatModel: Model<Seat>
  ) {}
  async create(createTicketDto: CreateTicketDto) {
    const { event_id, seat_id } = createTicketDto;
    if (!isValidObjectId(event_id)) {
      throw new BadRequestException('Region ID notogri');
    }
    if (!isValidObjectId(seat_id)) {
      throw new BadRequestException('District ID notogri');
    }
    const regioin = await this.eventModel.findById(event_id);
    if (!regioin) {
      throw new BadRequestException('Bunday Event yoq');
    }
    const district = await this.seatModel.findById(seat_id);
    if (!district) {
      throw new BadRequestException('Bunday seat yoq');
    }
    const venue = await this.ticketModel.create(createTicketDto);
    // regioin.venue.push(venue);
    // await venue.save();
    return venue;
  }

  async findAll() {
    return await this.ticketModel
      .find()
      .populate('event_id')
      .populate('seat_id');
  }

  async findOne(id: string) {
    return await this.ticketModel.findById(id);
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    return await this.ticketModel.findByIdAndUpdate(id, updateTicketDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.ticketModel.findByIdAndDelete(id);
  }
}
