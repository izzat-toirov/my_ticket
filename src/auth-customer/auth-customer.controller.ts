import { BadRequestException, Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthCustomerService } from './auth-customer.service';
import { Request, Response } from "express";
import { LoginCustomerDto } from '../customer/dto/login-admin.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';


@Controller('auth-customer')
export class AuthCustomerController {
  constructor(private readonly authCustomerService: AuthCustomerService) {}

  @Post("registration")
  async registration(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authCustomerService.registration(createCustomerDto);
  }

  @Post("login")
  async login(
    @Body() loginCustomerDto: LoginCustomerDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authCustomerService.login(loginCustomerDto, res);
  }

  @Post("logout")
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      throw new BadRequestException("Refresh token mavjud emas");
    }
    return this.authCustomerService.signOut(refreshToken, res);
  }
  

  @Post("refresh")
async refresh(
  @Body("adminId") adminId: string,
  @Req() req: Request,
  @Res({ passthrough: true }) res: Response
) {
  const refreshToken = req.cookies?.refreshToken;
  return this.authCustomerService.refreshToken(adminId, refreshToken, res);
}
}
