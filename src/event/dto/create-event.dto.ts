import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Yoshlar festivali' })
  name: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg' })
  photo: string;

  @ApiProperty({ example: '2025-08-10' })
  start_date: Date;

  @ApiProperty({ example: '10:00' })
  start_time: string;

  @ApiProperty({ example: '2025-08-12' })
  finish_date: Date;

  @ApiProperty({ example: '18:00' })
  finish_time: string;

  @ApiProperty({ example: 'Bu festival yoshlar uchun mo‘ljallangan.' })
  info: string;

  @ApiProperty({ example: 1, description: 'Event type ID (masalan: seminar, festival)' })
  event_type_id: string;

  @ApiProperty({ example: 3, description: 'Inson kategoriyasi ID (masalan: talabalar, o‘qituvchilar)' })
  humon_category_id: string;

  @ApiProperty({ example: 123, description: 'Bog‘liq boshqa Event ID (ixtiyoriy)' })
  Event_id: number;

  @ApiProperty({ example: 1, description: 'Til ID (1 - uz, 2 - ru, 3 - en)' })
  lang_id: number;

  @ApiProperty({ example: '2025-07-15' })
  release_date: Date;
}
