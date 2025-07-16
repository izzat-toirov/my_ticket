import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { SeatType } from '../../seat_type/entities/seat_type.entity';
import { Venue } from '../../venue/entities/venue.entity';

export type SeatDocument = HydratedDocument<Seat>;

@Schema({ versionKey: false, timestamps: false })
export class Seat {
  @Prop()
  sector: number;

  @Prop({ required: true })
  row_number: number;

  @Prop({ required: true })
  number: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Venue' })
  venue_id: Venue;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SeatType' })
  seat_type_id: SeatType;

  @Prop()
  location_in_schema: string;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);

