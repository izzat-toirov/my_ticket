import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
    @ApiProperty()
    name: string
}
