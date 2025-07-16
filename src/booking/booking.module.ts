import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethod, PaymentMethodSchema } from '../payment_method/entities/payment_method.entity';
import { DeliveryMethod, DeliveryMethodSchema } from '../delivery_method/entities/delivery_method.entity';
import { Booking, BookingSchema } from './entities/booking.entity';

@Module({
  imports: [
        MongooseModule.forFeature([
          {
            name: Booking.name,
            schema: BookingSchema
          },
          {
            name: PaymentMethod.name,
            schema: PaymentMethodSchema
          },
          {
            name: DeliveryMethod.name,
            schema: DeliveryMethodSchema
          }
        ])
      ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
