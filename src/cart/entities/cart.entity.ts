import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Region } from '../../region/entities/region.entity';
import { Customer } from '../../customer/entities/customer.entity';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ versionKey: false, timestamps: true })
export class Cart {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  })
  customer_id: Customer;

  @Prop()
  finishadAt: string;

  @Prop()
  status_id: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

