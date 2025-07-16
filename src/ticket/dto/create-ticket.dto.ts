import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsMongoId } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({ example: '64f2cbbf4f45ae763cc9a91e', description: 'Event ID' })
  @IsNotEmpty()
  @IsMongoId()
  event_id: string;

  @ApiProperty({ example: 15, description: 'Seat ID (number)' })
  @IsNotEmpty()
  @IsNumber()
  seat_id: string;

  @ApiProperty({ example: 50000, description: 'Ticket price in so‘m' })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ example: '5000', description: 'Optional service fee' })
  @IsOptional()
  @IsString()
  service_fee?: string;

  @ApiProperty({ example: '64f2ccb84f45ae763cc9a920', description: 'Status ID' })
  @IsOptional()
  @IsMongoId()
  status_id?: string;

  @ApiProperty({ example: 'VIP', description: 'Ticket type (e.g. VIP, Regular)' })
  @IsOptional()
  @IsString()
  ticket_type?: string;
}
