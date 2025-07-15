

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Customer } from '../../customer/entities/customer.entity';


export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema({ versionKey: false, timestamps: false })
export class CustomerAddress {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  })
  customer_id: Customer;

  @Prop()
  name: string;

  @Prop()
  region_id: number;

  @Prop()
  distcript_id: number;

  @Prop()
  street: string;

  @Prop()
  house: string;


  @Prop()
  flat: number;

  @Prop()
  location: string;

  @Prop()
  post_index: string;

  @Prop()
  info: string;


}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);


