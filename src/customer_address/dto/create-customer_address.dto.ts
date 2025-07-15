import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerAddressDto {
  @ApiProperty({ description: 'Mijozning ID raqami (UUID yoki string)' })
  @IsString()
  customer_id: string;

  @ApiProperty({ description: 'Manzil nomi (masalan, uy, ish, do‘stlar)' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Hudud ID raqami' })
  @IsNumber()
  region_id: number;

  @ApiProperty({ description: 'Tuman (district) ID raqami' })
  @IsNumber()
  distcript_id: number;

  @ApiProperty({ description: 'Ko‘cha nomi' })
  @IsString()
  street: string;

  @ApiProperty({ description: 'Uy raqami (masalan: 12A)' })
  @IsString()
  house: string;

  @ApiProperty({ description: 'Xonadon raqami' })
  @IsNumber()
  flat: number;

  @ApiProperty({
    description: 'Geolokatsiya koordinatasi (masalan: "41.3123,69.2793")',
    example: '41.3123,69.2793',
  })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Pochta indeksi (masalan: 100011)' })
  @IsString()
  post_index: string;

  @ApiProperty({
    description: 'Qo‘shimcha ma’lumot (masalan: eshik paroli, yo‘riqnoma)',
    required: false,
  })
  @IsOptional()
  @IsString()
  info?: string;
}
