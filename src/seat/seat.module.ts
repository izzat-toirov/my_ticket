import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from '../venue/entities/venue.entity';
import { Seat, SeatSchema } from './entities/seat.entity';
import { SeatType, SeatTypeSchema } from '../seat_type/entities/seat_type.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Venue.name,
          schema: VenueSchema,
        },
        {
          name: Seat.name,
          schema: SeatSchema,
        },
        {
          name: SeatType.name,
          schema: SeatTypeSchema,
        },
      ]),
    ],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
