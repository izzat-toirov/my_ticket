

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LongDocument = HydratedDocument<Long>;

@Schema({ versionKey: false, timestamps: false })
export class Long {
  @Prop()
  name: string;

}

export const LongSchema = SchemaFactory.createForClass(Long);


