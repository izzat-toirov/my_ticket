import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Cart } from './entities/cart.entity';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
  ) {}
  async create(createCartDto: CreateCartDto) {
    const { customer_id } = createCartDto;
    if (!isValidObjectId(customer_id)) {
      throw new BadRequestException('customer ID notogri');
    }
    const regioin = await this.customerModel.findById(customer_id);
    if (!regioin) {
      throw new BadRequestException('Bunday customer yoq');
    }
    const district = await this.cartModel.create(createCartDto);
    // regioin.district.push(district);
    // await regioin.save();
    return district;
  }

  async findAll() {
    return await this.cartModel.find().populate('customer_id');
  }

  async findOne(id: string) {
    return await this.cartModel.findById(id);
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    return await this.cartModel.findByIdAndUpdate(id, updateCartDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.cartModel.findByIdAndDelete(id);
  }
}
