
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ versionKey: false, timestamps: false })
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  birth_date: Date;


  @Prop()
  lang_id: number;

  @Prop()
  refresh_token: string;


}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

