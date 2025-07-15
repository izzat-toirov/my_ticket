import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
    @ApiProperty()
    name: string;
}
