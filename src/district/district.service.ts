import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/mongoose';
import { District } from './entities/district.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Region } from '../region/entities/region.entity';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District.name) private readonly districtModel: Model<District>,
  @InjectModel(Region.name) private readonly regionModel: Model<Region>
){}
          async create(createDistrictDto: CreateDistrictDto) {
            const {region_id} = createDistrictDto;
            if(!isValidObjectId(region_id)){
              throw new BadRequestException("Region ID notogri");
            }
            const regioin = await this.regionModel.findById(region_id);
            if(!regioin){
              throw new BadRequestException("Bunday region yoq");
            }
            const district = await this.districtModel.create(createDistrictDto);
            regioin.district.push(district);
            await regioin.save();
            return district;
          }
        
          async findAll() {
            return await this.districtModel.find().populate("region_id");
          }
        
          async findOne(id: string) {
            return await this.districtModel.findById(id);
          }
        
          async update(id: string, updateDistrictDto: UpdateDistrictDto) {
            return await this.districtModel.findByIdAndUpdate(id, updateDistrictDto, {new: true});
          }
        
          async remove(id: string) {
            return await this.districtModel.findByIdAndDelete(id);
          }
}
