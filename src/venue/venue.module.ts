import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from './entities/venue.entity';
import { District, DistrictSchema } from '../district/entities/district.entity';
import { Region, RegionSchema } from '../region/entities/region.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Venue.name,
          schema: VenueSchema
        },
        {
          name: District.name,
          schema: DistrictSchema
        },
        {
          name: Region.name,
          schema: RegionSchema
        }
      ])
    ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
