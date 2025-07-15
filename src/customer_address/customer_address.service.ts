import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerAddress } from './entities/customer_address.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress.name) private readonly customerAddressModel: Model<CustomerAddress>,
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
  ){}
            async create(createCustomerAddressDto: CreateCustomerAddressDto) {
              const {customer_id} = createCustomerAddressDto;
              if(!isValidObjectId(customer_id)){
                throw new BadRequestException("Customer ID notogri");
              }
              const regioin = await this.customerModel.findById(customer_id);
              if(!regioin){
                throw new BadRequestException("Bunday Customer yoq");
              }
              const district = await this.customerAddressModel.create(createCustomerAddressDto);
              // regioin.district.push(district);
              // await regioin.save();
              return district;
            }
          
            async findAll() {
              return await this.customerAddressModel.find().populate("customer_id");
            }
          
            async findOne(id: string) {
              return await this.customerAddressModel.findById(id);
            }
          
            async update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto) {
              return await this.customerAddressModel.findByIdAndUpdate(id, updateCustomerAddressDto, {new: true});
            }
          
            async remove(id: string) {
              return await this.customerAddressModel.findByIdAndDelete(id);
            }
}
