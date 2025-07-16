import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({
    description: 'Cart ID (Mongo ObjectId)',
    example: '64c91f1d3c4a4d7e9fdbef99',
  })
  @IsMongoId()
  cart_id: string;

  @ApiProperty({
    description: 'Booking finished date',
    example: '2025-07-16T15:00:00Z',
  })
  @IsDateString()
  finished: string;

  @ApiProperty({
    description: 'Payment Method ID',
    example: '64c91f1d3c4a4d7e9fdbf22',
    required: false,
  })
  @IsOptional()
  @IsMongoId()
  paymant_method_id: string;

  @ApiProperty({
    description: 'Delivery Method ID',
    example: '64c91f1d3c4a4d7e9fdbf33',
    required: false,
  })
  @IsOptional()
  @IsMongoId()
  deleviery_method_id: string;

  @ApiProperty({
    description: 'Discount coupon ID',
    example: 1234,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  discount_coupon_id: number;

  @ApiProperty({
    description: 'Status ID',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  status_id: number;
}
