

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { District } from "../../district/entities/district.entity";

export type RegionDocument = HydratedDocument<Region>;

@Schema({ versionKey: false, timestamps: false })
export class Region {
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District"
      }
    ]
  })
  district: District[];

  

}

export const RegionSchema = SchemaFactory.createForClass(Region);

