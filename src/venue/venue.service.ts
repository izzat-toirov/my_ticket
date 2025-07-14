import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { District } from '../district/entities/district.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Region } from '../region/entities/region.entity';
import { Venue } from './entities/venue.entity';

@Injectable()
export class VenueService {
  constructor(@InjectModel(District.name) private readonly districtModel: Model<District>,
    @InjectModel(Region.name) private readonly regionModel: Model<Region>,
    @InjectModel(Venue.name) private readonly venueModel: Model<Venue>
  ){}
            async create(createVenueDto: CreateVenueDto) {
              const {region_id, district_id} = createVenueDto;
              if(!isValidObjectId(region_id)){
                throw new BadRequestException("Region ID notogri");
              }
              if(!isValidObjectId(district_id)){
                throw new BadRequestException("District ID notogri");
              }
              const regioin = await this.regionModel.findById(region_id);
              if(!regioin){
                throw new BadRequestException("Bunday region yoq");
              }
              const district = await this.districtModel.findById(district_id);
              if(!district){
                throw new BadRequestException("Bunday region yoq");
              }
              const venue = await this.venueModel.create(createVenueDto);
              // regioin.venue.push(venue);
              // await venue.save();
              return venue;
            }
          
            async findAll() {
              return await this.venueModel.find().populate("region_id").populate("district_id");
            }
          
            async findOne(id: string) {
              return await this.venueModel.findById(id);
            }
          
            async update(id: string, updateVenueDto: UpdateVenueDto) {
              return await this.venueModel.findByIdAndUpdate(id, updateVenueDto, {new: true});
            }
          
            async remove(id: string) {
              return await this.venueModel.findByIdAndDelete(id);
            }
}
