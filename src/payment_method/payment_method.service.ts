import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentMethod } from './entities/payment_method.entity';
import { Model } from 'mongoose';

@Injectable()
export class PaymentMethodService {
  constructor(@InjectModel(PaymentMethod.name) private readonly paymenyModel: Model<PaymentMethod>){}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymenyModel.create(createPaymentMethodDto);
  }

  async findAll() {
    return await this.paymenyModel.find();
  }

  async findOne(id: string) {
    return await this.paymenyModel.findById(id);
  }

  async update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return await this.paymenyModel.findByIdAndUpdate(id, updatePaymentMethodDto, {new: true});
  }

  async remove(id: string) {
    return await this.paymenyModel.findByIdAndDelete(id);
  }
}
