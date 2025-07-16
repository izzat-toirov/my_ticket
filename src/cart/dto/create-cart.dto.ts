// create-cart.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({
    description: 'Customer ID (Mongo ObjectId)',
    example: '64c91f1d3c4a4d7e9fdbef99',
  })
  @IsMongoId()
  customer_id: string;

  @ApiProperty({
    description: 'When the cart was finished (optional)',
    example: '2025-07-16T12:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsString()
  finishedAt?: string;

  @ApiProperty({
    description: 'Status ID (optional)',
    example: 'active',
    required: false,
  })
  @IsOptional()
  @IsString()
  status_id?: string;
}
