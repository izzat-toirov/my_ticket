import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsInt } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Admin>;


@Schema({versionKey: false, timestamps: false})
export class Admin {
  @Prop()
  full_name: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  password: string;

  @Prop()
  refresh_token: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ default: false })
  is_creator: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
