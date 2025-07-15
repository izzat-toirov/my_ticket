import { IsDateString, IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    format: 'date',
    example: '2000-01-15',
  })
  @IsDateString()
  birth_date: string;

  @ApiProperty()
  @IsNumber()
  lang_id: number;

//   @ApiProperty()
//   @IsOptional()
//   @IsString()
//   refresh_token?: string;
}
