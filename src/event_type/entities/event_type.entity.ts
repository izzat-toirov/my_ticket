import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema({ versionKey: false, timestamps: false })
export class EventType {
  @Prop()
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventType"
  })
  parent_event_type_id: EventType;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
