import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Seat } from './entities/seat.entity';
import { Venue } from '../venue/entities/venue.entity';
import { SeatType } from '../seat_type/entities/seat_type.entity';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(SeatType.name) private readonly seatTypeModel: Model<SeatType>,
    @InjectModel(Venue.name) private readonly venueModel: Model<Venue>,
    @InjectModel(Seat.name) private readonly seatModel: Model<Seat>
  ) {}
  async create(createSeatDto: CreateSeatDto) {
    const { venue_id, seat_type_id } = createSeatDto;
    if (!isValidObjectId(venue_id)) {
      throw new BadRequestException('Venue ID notogri');
    }
    if (!isValidObjectId(seat_type_id)) {
      throw new BadRequestException('SeatType ID notogri');
    }
    const regioin = await this.venueModel.findById(venue_id);
    if (!regioin) {
      throw new BadRequestException('Bunday Venue yoq');
    }
    const district = await this.seatTypeModel.findById(seat_type_id);
    if (!district) {
      throw new BadRequestException('Bunday SeatType yoq');
    }
    const venue = await this.seatModel.create(createSeatDto);
    // regioin.venue.push(venue);
    // await venue.save();
    return venue;
  }

  async findAll() {
    return await this.seatModel
      .find()
      .populate('venue_id')
      .populate('seat_type_id');
  }

  async findOne(id: string) {
    return await this.seatModel.findById(id);
  }

  async update(id: string, updateSeatDto: UpdateSeatDto) {
    return await this.seatModel.findByIdAndUpdate(id, updateSeatDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.seatModel.findByIdAndDelete(id);
  }
}
