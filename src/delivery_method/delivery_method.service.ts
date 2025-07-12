import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DeliveryMethod } from './entities/delivery_method.entity';
import { Model } from 'mongoose';

@Injectable()
export class DeliveryMethodService {
   constructor(@InjectModel(DeliveryMethod.name) private readonly paymenyModel: Model<DeliveryMethod>){}
    async create(CreateDeliveryMethodDto: CreateDeliveryMethodDto) {
      return this.paymenyModel.create(CreateDeliveryMethodDto);
    }
  
    async findAll() {
      return await this.paymenyModel.find();
    }
  
    async findOne(id: string) {
      return await this.paymenyModel.findById(id);
    }
  
    async update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
      return await this.paymenyModel.findByIdAndUpdate(id, updateDeliveryMethodDto, {new: true});
    }
  
    async remove(id: string) {
      return await this.paymenyModel.findByIdAndDelete(id);
    }
}
