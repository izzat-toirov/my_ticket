import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "../../venue/entities/venue.entity";
import { Type } from "../../types/entities/type.entity";

export class CreateVenueTypeDto {
    @ApiProperty()
        venue_id: Venue;
        @ApiProperty()
    
        type_id:Type;
}
