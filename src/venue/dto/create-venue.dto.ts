import { ApiProperty } from "@nestjs/swagger";
import { District } from "../../district/entities/district.entity";
import { Region } from "../../region/entities/region.entity";

export class CreateVenueDto {
    @ApiProperty()
      name: string;
      @ApiProperty()
    
      address: string;
      @ApiProperty()
    
      location: string;
      @ApiProperty()
    
      site: string;
      @ApiProperty()
    
      phone: string;
      @ApiProperty()
    
      schem: string;
      @ApiProperty()
    
      region_id: Region;
    @ApiProperty()
       

      district_id: District;
}
