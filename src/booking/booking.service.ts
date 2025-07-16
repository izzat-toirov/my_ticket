import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Booking } from './entities/booking.entity';
import { PaymentMethod } from '../payment_method/entities/payment_method.entity';
import { DeliveryMethod } from '../delivery_method/entities/delivery_method.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
    @InjectModel(PaymentMethod.name) private readonly paymentMethodModel: Model<PaymentMethod>,
    @InjectModel(DeliveryMethod.name) private readonly deliveryMethodModel: Model<DeliveryMethod>
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    const { paymant_method_id, deleviery_method_id } = createBookingDto;
    if (!isValidObjectId(paymant_method_id)) {
      throw new BadRequestException('paymant_method_id ID notogri');
    }
    const regioin = await this.paymentMethodModel.findById(paymant_method_id);
    if (!regioin) {
      throw new BadRequestException('Bunday customer yoq');
    }
    if (!isValidObjectId(deleviery_method_id)) {
      throw new BadRequestException('deleviery_method_id ID notogri');
    }
    const regioin1 = await this.deliveryMethodModel.findById(deleviery_method_id);
    if (!regioin1) {
      throw new BadRequestException('Bunday customer yoq');
    }
    const district = await this.bookingModel.create(createBookingDto);
    // regioin.district.push(district);
    // await regioin.save();
    return district;
  }

  async findAll() {
    return await this.bookingModel.find().populate('paymant_method_id').populate('deleviery_method_id');
  }

  async findOne(id: string) {
    return await this.bookingModel.findById(id);
  }

  async update(id: string, updateBookingDto: UpdateBookingDto) {
    return await this.bookingModel.findByIdAndUpdate(id, updateBookingDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.bookingModel.findByIdAndDelete(id);
  }
}
// 6872065235099e6717b9f1de
// 6872066835099e6717b9f1e1