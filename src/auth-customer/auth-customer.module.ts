import { Module } from '@nestjs/common';
import { AuthCustomerService } from './auth-customer.service';
import { AuthCustomerController } from './auth-customer.controller';
import { JwtModule } from '@nestjs/jwt';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [JwtModule.register({}), CustomerModule],
  controllers: [AuthCustomerController],
  providers: [AuthCustomerService],
})
export class AuthCustomerModule {}
