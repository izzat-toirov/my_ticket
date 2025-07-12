import { Module } from '@nestjs/common';
import { LongService } from './long.service';
import { LongController } from './long.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Long, LongSchema } from './entities/long.entity';

@Module({
  imports:[MongooseModule.forFeature([{
        name: Long.name,
        schema: LongSchema
      }])],
  controllers: [LongController],
  providers: [LongService],
})
export class LongModule {}
