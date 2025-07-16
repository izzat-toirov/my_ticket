import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cart } from '../../cart/entities/cart.entity';
import { PaymentMethod } from '../../payment_method/entities/payment_method.entity';
import { DeliveryMethod } from '../../delivery_method/entities/delivery_method.entity';

export type BookingDocument = HydratedDocument<Booking>;

@Schema({ versionKey: false, timestamps: true })
export class Booking {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  })
  cart_id: Cart;

  @Prop()
  finished: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaymentMethod"
  })
  paymant_method_id: PaymentMethod;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryMethod"
  })
  deleviery_method_id: DeliveryMethod;

  @Prop()
  discount_coupon_id: number;

  @Prop()
  status_id: number;

}

export const BookingSchema = SchemaFactory.createForClass(Booking);
