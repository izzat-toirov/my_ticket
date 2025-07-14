
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Region } from '../../region/entities/region.entity';
import { District } from '../../district/entities/district.entity';

export type VenueDocument = HydratedDocument<Venue>;

@Schema({ versionKey: false, timestamps: false })
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop()
  schem: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
  })
  region_id: Region;


  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
  })
  district_id: District;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);

