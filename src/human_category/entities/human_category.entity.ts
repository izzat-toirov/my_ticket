import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HumanCategoryDocument = HydratedDocument<HumanCategory>;

@Schema({ versionKey: false, timestamps: false })
export class HumanCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  start_age: number;

  @Prop({ required: true })
  finish_age: number;

  @Prop({ required: true, enum: ['male', 'female', 'any'] })
  gender: string;  
}

export const HumanCategorySchema = SchemaFactory.createForClass(HumanCategory);
