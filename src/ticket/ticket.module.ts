import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from '../event/entities/event.entity';
import { Seat, SeatSchema } from '../seat/entities/seat.entity';
import { Ticket, TicketSchema } from './entities/ticket.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
      {
        name: Seat.name,
        schema: SeatSchema,
      },
      {
        name: Ticket.name,
        schema: TicketSchema,
      },
    ]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
