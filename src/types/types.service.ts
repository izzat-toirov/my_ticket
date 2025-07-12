import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './entities/type.entity';
import { Model } from 'mongoose';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type.name) private readonly paymenyModel: Model<Type>){}
              async create(createTypeDto: CreateTypeDto) {
                return this.paymenyModel.create(createTypeDto);
              }
            
              async findAll() {
                return await this.paymenyModel.find();
              }
            
              async findOne(id: string) {
                return await this.paymenyModel.findById(id);
              }
            
              async update(id: string, updateTypeDto: UpdateTypeDto) {
                return await this.paymenyModel.findByIdAndUpdate(id, updateTypeDto, {new: true});
              }
            
              async remove(id: string) {
                return await this.paymenyModel.findByIdAndDelete(id);
              }
}
