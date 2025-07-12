import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LongService } from './long.service';
import { CreateLongDto } from './dto/create-long.dto';
import { UpdateLongDto } from './dto/update-long.dto';

@Controller('long')
export class LongController {
  constructor(private readonly longService: LongService) {}

  @Post()
  create(@Body() createLongDto: CreateLongDto) {
    return this.longService.create(createLongDto);
  }

  @Get()
  findAll() {
    return this.longService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLongDto: UpdateLongDto) {
    return this.longService.update(id, updateLongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longService.remove(id);
  }
}
