import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TicketStatus } from './entities/ticket_status.entity';
import { Model } from 'mongoose';

@Injectable()
export class TicketStatusService {
  constructor(@InjectModel(TicketStatus.name) private readonly paymenyModel: Model<TicketStatus>){}
            async create(createTicketStatusDto: CreateTicketStatusDto) {
              return this.paymenyModel.create(createTicketStatusDto);
            }
          
            async findAll() {
              return await this.paymenyModel.find();
            }
          
            async findOne(id: string) {
              return await this.paymenyModel.findById(id);
            }
          
            async update(id: string, updateTicketStatusDto: UpdateTicketStatusDto) {
              return await this.paymenyModel.findByIdAndUpdate(id, updateTicketStatusDto, {new: true});
            }
          
            async remove(id: string) {
              return await this.paymenyModel.findByIdAndDelete(id);
            }
}
