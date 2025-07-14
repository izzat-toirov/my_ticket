import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { RegionModule } from './region/region.module';
import { TypesModule } from './types/types.module';
import { LongModule } from './long/long.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { DistrictModule } from "./district/district.module";
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypesModule } from './venue_types/venue_types.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    AdminModule,
    AuthModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    SeatTypeModule,
    RegionModule,
    TypesModule,
    LongModule,
    TicketStatusModule,
    DistrictModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
