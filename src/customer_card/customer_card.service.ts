import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../customer/entities/customer.entity';
import { isValidObjectId, Model } from 'mongoose';
import { CustomerCard } from './entities/customer_card.entity';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard.name) private readonly customerCardModel: Model<CustomerCard>,
      @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
    ){}
              async create(createCustomerCardDto: CreateCustomerCardDto) {
                const {customer_id} = createCustomerCardDto;
                if(!isValidObjectId(customer_id)){
                  throw new BadRequestException("Customer ID notogri");
                }
                const regioin = await this.customerModel.findById(customer_id);
                if(!regioin){
                  throw new BadRequestException("Bunday Customer yoq");
                }
                const district = await this.customerCardModel.create(createCustomerCardDto);
                // regioin.district.push(district);
                // await regioin.save();
                return district;
              }
            
              async findAll() {
                return await this.customerCardModel.find().populate("customer_id");
              }
            
              async findOne(id: string) {
                return await this.customerCardModel.findById(id);
              }
            
              async update(id: string, updateCustomerCardDto: UpdateCustomerCardDto) {
                return await this.customerCardModel.findByIdAndUpdate(id, updateCustomerCardDto, {new: true});
              }
            
              async remove(id: string) {
                return await this.customerCardModel.findByIdAndDelete(id);
              }
}
