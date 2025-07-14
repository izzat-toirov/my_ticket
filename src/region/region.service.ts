import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from './entities/region.entity';
import { Model } from 'mongoose';
import { District } from '../district/entities/district.entity';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region.name) private readonly paymenyModel: Model<Region>
){}
        async create(createRegionDto: CreateRegionDto) {
          return this.paymenyModel.create(createRegionDto);
        }
      
        async findAll() {
          return await this.paymenyModel.find().populate("district");
        }
      
        async findOne(id: string) {
          return await this.paymenyModel.findById(id);
        }
      
        async update(id: string, updateRegionDto: UpdateRegionDto) {
          return await this.paymenyModel.findByIdAndUpdate(id, updateRegionDto, {new: true});
        }
      
        async remove(id: string) {
          return await this.paymenyModel.findByIdAndDelete(id);
        }
}
