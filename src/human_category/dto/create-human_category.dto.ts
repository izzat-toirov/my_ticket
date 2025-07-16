import { ApiProperty } from '@nestjs/swagger';

export class CreateHumanCategoryDto {
  @ApiProperty({ example: 'Yoshlar', description: 'Kategoriya nomi' })
  name: string;

  @ApiProperty({ example: 18, description: 'Yosh oralig‘ining boshlanishi' })
  start_age: number;

  @ApiProperty({ example: 30, description: 'Yosh oralig‘ining tugashi' })
  finish_age: number;

  @ApiProperty({ example: 'any', description: 'Jinsi (male, female, any)' })
  gender: string;
}
