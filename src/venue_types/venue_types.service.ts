import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venue } from '../venue/entities/venue.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Type } from '../types/entities/type.entity';
import { VenueType } from './entities/venue_type.entity';

@Injectable()
export class VenueTypesService {
  constructor(@InjectModel(VenueType.name) private readonly venueTypeModel: Model<VenueType>,
      @InjectModel(Type.name) private readonly typeModel: Model<Type>,
      @InjectModel(Venue.name) private readonly venueModel: Model<Venue>
    ){}
              async create(CreateVenueTypeDto: CreateVenueTypeDto) {
                const {venue_id, type_id} = CreateVenueTypeDto;
                if(!isValidObjectId(venue_id)){
                  throw new BadRequestException("Venue ID notogri");
                }
                if(!isValidObjectId(type_id)){
                  throw new BadRequestException("Type ID notogri");
                }
                const regioin = await this.venueModel.findById(venue_id);
                if(!regioin){
                  throw new BadRequestException("Bunday Venue yoq");
                }
                const district = await this.typeModel.findById(type_id);
                if(!district){
                  throw new BadRequestException("Bunday type yoq");
                }
                const venue = await this.venueTypeModel.create(CreateVenueTypeDto);
                // regioin.venue.push(venue);
                // await venue.save();
                return venue;
              }
            
              async findAll() {
                return await this.venueTypeModel.find().populate("venue_id").populate("type_id");
              }
            
              async findOne(id: string) {
                return await this.venueTypeModel.findById(id);
              }
            
              async update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
                return await this.venueTypeModel.findByIdAndUpdate(id, updateVenueTypeDto, {new: true});
              }
            
              async remove(id: string) {
                return await this.venueTypeModel.findByIdAndDelete(id);
              }
}
