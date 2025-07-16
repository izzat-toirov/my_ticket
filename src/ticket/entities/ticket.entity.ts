import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Seat } from '../../seat/entities/seat.entity';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ versionKey: false, timestamps: false })
export class Ticket {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Event' })
  event_id: Event;

  @Prop({ required: true })
  seat_id: Seat;

  @Prop({ required: true })
  price: number;

  @Prop()
  service_fee: string;

  @Prop()
  status_id: number;

  @Prop()
  ticket_type: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
