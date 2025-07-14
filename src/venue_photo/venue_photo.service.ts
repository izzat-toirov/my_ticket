import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Venue } from '../venue/entities/venue.entity';
import { VenuePhoto } from './entities/venue_photo.entity';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(Venue.name) private readonly venueModel: Model<Venue>,
    @InjectModel(VenuePhoto.name) private readonly venuePhotoModel: Model<VenuePhoto>
  ){}
            async create(createVenuePhotoDto: CreateVenuePhotoDto) {
              const {venue_id} = createVenuePhotoDto;
              if(!isValidObjectId(venue_id)){
                throw new BadRequestException("Region ID notogri");
              }
              const regioin = await this.venueModel.findById(venue_id);
              if(!regioin){
                throw new BadRequestException("Bunday region yoq");
              }
              const venuePhoto = await this.venuePhotoModel.create(createVenuePhotoDto);
              // regioin.venuePhoto.push(venuePhoto);
              // await regioin.save();
              return venuePhoto;
            }
          
            async findAll() {
              return await this.venuePhotoModel.find().populate("venue_id");
            }
          
            async findOne(id: string) {
              return await this.venuePhotoModel.findById(id);
            }
          
            async update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto) {
              return await this.venuePhotoModel.findByIdAndUpdate(id, updateVenuePhotoDto, {new: true});
            }
          
            async remove(id: string) {
              return await this.venuePhotoModel.findByIdAndDelete(id);
            }
}
