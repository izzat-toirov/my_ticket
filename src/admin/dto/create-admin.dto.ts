import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty()
  full_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  confirm_password: string;
}
