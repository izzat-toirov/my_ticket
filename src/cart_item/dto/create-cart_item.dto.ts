import { ApiProperty } from "@nestjs/swagger";

export class CreateCartItemDto {
  @ApiProperty()
  ticked_id: string;
  @ApiProperty()
  cart_id: string;
}
