import { ApiProperty } from "@nestjs/swagger";

export class CreateLongDto {
    @ApiProperty()
    name: string;
}
