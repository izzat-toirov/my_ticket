import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './entities/cart.entity';
import { Customer, CustomerSchema } from '../customer/entities/customer.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Cart.name,
          schema: CartSchema
        },
        {
          name: Customer.name,
          schema: CustomerSchema
        }
      ])
    ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
