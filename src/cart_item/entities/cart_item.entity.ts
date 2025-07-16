

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Region } from '../../region/entities/region.entity';
import { Venue } from '../../venue/entities/venue.entity';
import { Type } from '../../types/entities/type.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';
import { Cart } from '../../cart/entities/cart.entity';

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema({ versionKey: false, timestamps: false })
export class CartItem {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket',
  })
  ticked_id: Ticket;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  })
  cart_id: Cart;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);



