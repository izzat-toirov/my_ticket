import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @ApiProperty({ example: 1, description: 'Sector number' })
  @IsOptional()
  @IsNumber()
  sector?: number;

  @ApiProperty({ example: 5, description: 'Row number in the sector' })
  @IsNotEmpty()
  @IsNumber()
  row_number: number;

  @ApiProperty({ example: 12, description: 'Seat number in the row' })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({ example: '64f3b6c3a2b8e1a7f1b2d345', description: 'Venue ID (ObjectId)' })
  @IsNotEmpty()
  @IsMongoId()
  venue_id: string;

  @ApiProperty({ example: '64f3b6c3a2b8e1a7f1b2d678', description: 'SeatType ID (ObjectId)' })
  @IsNotEmpty()
  @IsMongoId()
  seat_type_id: string;

  @ApiProperty({ example: 'x:100,y:250', description: 'Location in SVG schema or map' })
  @IsOptional()
  @IsString()
  location_in_schema?: string;
}
