import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CartItem } from './entities/cart_item.entity';
import { Ticket } from '../ticket/entities/ticket.entity';
import { Cart } from '../cart/entities/cart.entity';

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem.name)
    private readonly cartItemModel: Model<CartItem>,
    @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>,
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>
  ) {}
  async create(createCartItemDto: CreateCartItemDto) {
    const { cart_id, ticked_id } = createCartItemDto;
    if (!isValidObjectId(cart_id)) {
      throw new BadRequestException('Cart ID notogri');
    }
    if (!isValidObjectId(ticked_id)) {
      throw new BadRequestException('Ticket ID notogri');
    }
    const regioin = await this.cartModel.findById(cart_id);
    if (!regioin) {
      throw new BadRequestException('Bunday Cart yoq');
    }
    const district = await this.ticketModel.findById(ticked_id);
    if (!district) {
      throw new BadRequestException('Bunday ticket yoq');
    }
    const venue = await this.cartItemModel.create(createCartItemDto);
    // regioin.venue.push(venue);
    // await venue.save();
    return venue;
  }

  async findAll() {
    return await this.cartItemModel
      .find()
      .populate('cart_id')
      .populate('ticked_id');
  }

  async findOne(id: string) {
    return await this.cartItemModel.findById(id);
  }

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return await this.cartItemModel.findByIdAndUpdate(id, updateCartItemDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.cartItemModel.findByIdAndDelete(id);
  }
}
