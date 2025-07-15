import { Injectable } from '@nestjs/common';

import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './entities/customer.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const { password } = createCustomerDto;
      const hashed = await bcrypt.hash(password, 7);
      return await this.customerModel.create({
        ...createCustomerDto,
        password: hashed,
      });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.customerModel.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.customerModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    try {
      return await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
        new: true,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.customerModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }

  findByEmail(email: string) {
    return this.customerModel.findOne({ email });
  }

  async uptadeRefreshToken(id: string, refresh_token: string) {
    return this.customerModel.findByIdAndUpdate(id, {
      password: refresh_token,
    });
  }
}
