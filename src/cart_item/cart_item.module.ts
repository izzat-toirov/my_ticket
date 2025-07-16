import { Module } from '@nestjs/common';
import { CartItemService } from './cart_item.service';
import { CartItemController } from './cart_item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from '../ticket/entities/ticket.entity';
import { Cart, CartSchema } from '../cart/entities/cart.entity';
import { CartItem, CartItemSchema } from './entities/cart_item.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CartItem.name,
        schema: CartItemSchema,
      },
      {
        name: Ticket.name,
        schema: TicketSchema,
      },
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
  ],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
