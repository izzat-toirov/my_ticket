import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './entities/event.entity';
import { EventType, EventTypeSchema } from '../event_type/entities/event_type.entity';
import { HumanCategory, HumanCategorySchema } from '../human_category/entities/human_category.entity';

@Module({
  imports:[MongooseModule.forFeature([
      { name: Event.name, 
        schema: EventSchema
       },
       {
        name: EventType.name,
        schema:EventTypeSchema
       },
       {
        name: HumanCategory.name,
        schema:HumanCategorySchema
       }
    ])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
