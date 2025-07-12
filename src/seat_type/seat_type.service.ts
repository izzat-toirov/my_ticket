import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SeatType } from './entities/seat_type.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType.name) private readonly paymenyModel: Model<SeatType>){}
          async create(createSeatTypeDto: CreateSeatTypeDto) {
            return this.paymenyModel.create(createSeatTypeDto);
          }
        
          async findAll() {
            return await this.paymenyModel.find();
          }
        
          async findOne(id: string) {
            return await this.paymenyModel.findById(id);
          }
        
          async update(id: string, updateSeatTypeDto: UpdateSeatTypeDto) {
            return await this.paymenyModel.findByIdAndUpdate(id, updateSeatTypeDto, {new: true});
          }
        
          async remove(id: string) {
            return await this.paymenyModel.findByIdAndDelete(id);
          }
}
