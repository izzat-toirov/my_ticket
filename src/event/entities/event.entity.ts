import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { EventType } from '../../event_type/entities/event_type.entity';
import { HumanCategory } from '../../human_category/entities/human_category.entity';

export type EventDocument = HydratedDocument<Event>;

@Schema({ versionKey: false, timestamps: false })
export class Event {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  start_date: Date;

  @Prop()
  start_time: string;

  @Prop()
  finish_date: Date;

  @Prop()
  finish_time: string;

  @Prop()
  info: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventType"
  })
  event_type_id: EventType;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "HumanCategory"
  })
  humon_category_id: HumanCategory;

  @Prop()
  Event_id: number;

  @Prop()
  lang_id: number;

  @Prop()
  release_date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
