import { IsString, IsBoolean, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerCardDto {
  @ApiProperty({ description: 'Mijozning ID raqami (Mongo ObjectId)' })
  @IsMongoId()
  customer_id: string;

  @ApiProperty({ description: 'Karta nomi (masalan: UzCard, Humo)' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Telefon raqam (karta bilan bog‘liq)' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Karta raqami (16 xonali)' })
  @IsString()
  number: string;

  @ApiProperty({ description: 'Karta amal qilish yili (masalan: 2027)' })
  @IsString()
  year: string;

  @ApiProperty({ description: 'Karta amal qilish oyi (masalan: 09)' })
  @IsString()
  month: string;

}
