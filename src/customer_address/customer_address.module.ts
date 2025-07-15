import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerAddress, CustomerAddressSchema } from './entities/customer_address.entity';
import { Customer, CustomerSchema } from '../customer/entities/customer.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: CustomerAddress.name,
          schema: CustomerAddressSchema
        },
        {
          name: Customer.name,
          schema: CustomerSchema
        }
      ])
    ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
