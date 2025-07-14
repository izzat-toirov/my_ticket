import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue_types.service';
import { VenueTypesController } from './venue_types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from '../venue/entities/venue.entity';
import { Type, TypeSchema } from '../types/entities/type.entity';
import { VenueType, VenueTypeSchema } from './entities/venue_type.entity';

@Module({
  imports: [
        MongooseModule.forFeature([
          {
            name: Venue.name,
            schema: VenueSchema
          },
          {
            name: Type.name,
            schema: TypeSchema
          },
          {
            name: VenueType.name,
            schema: VenueTypeSchema
          }
        ])
      ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
