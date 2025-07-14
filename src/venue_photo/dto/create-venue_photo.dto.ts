import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "../../venue/entities/venue.entity";
export class CreateVenuePhotoDto {
    @ApiProperty()
    venue_id: Venue;
    @ApiProperty()

    url:string;
    
}
