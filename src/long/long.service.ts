import { Injectable } from '@nestjs/common';
import { CreateLongDto } from './dto/create-long.dto';
import { UpdateLongDto } from './dto/update-long.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Long } from './entities/long.entity';
import { Model } from 'mongoose';

@Injectable()
export class LongService {
  constructor(@InjectModel(Long.name) private readonly paymenyModel: Model<Long>){}
      async create(CreateLongDto: CreateLongDto) {
        return this.paymenyModel.create(CreateLongDto);
      }
    
      async findAll() {
        return await this.paymenyModel.find();
      }
    
      async findOne(id: string) {
        return await this.paymenyModel.findById(id);
      }
    
      async update(id: string, updateLongDto: UpdateLongDto) {
        return await this.paymenyModel.findByIdAndUpdate(id, updateLongDto, {new: true});
      }
    
      async remove(id: string) {
        return await this.paymenyModel.findByIdAndDelete(id);
      }
}
