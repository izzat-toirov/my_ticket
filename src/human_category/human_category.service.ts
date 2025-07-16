import { Injectable } from '@nestjs/common';


import { InjectModel } from '@nestjs/mongoose';
import { HumanCategory } from './entities/human_category.entity';
import { Model } from 'mongoose';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory.name)
    private readonly humanCategoryModel: Model<HumanCategory>
  ) {}
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    try {
      return await this.humanCategoryModel.create(createHumanCategoryDto);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.humanCategoryModel.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.humanCategoryModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    try {
      return await this.humanCategoryModel.findByIdAndUpdate(
        id,
        updateHumanCategoryDto,
        {
          new: true,
        }
      );
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.humanCategoryModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
}
