import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
  parent_event_type_id: string;
}
