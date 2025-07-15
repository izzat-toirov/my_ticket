import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { CustomerService } from '../customer/customer.service';
import { CustomerDocument } from '../customer/entities/customer.entity';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { LoginCustomerDto } from '../customer/dto/login-admin.dto';
import { Response } from "express";


@Injectable()
export class AuthCustomerService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly customerService: CustomerService
      ) {}
    
      async generateTokens(customer: CustomerDocument) {
        const payload = {
          id: customer._id,
          is_active: customer.phone
        };
    
        const [accessToken, refreshToken] = await Promise.all([
          this.jwtService.signAsync(payload, {
            secret: process.env.ACCESS_TOKEN_KEY,
            expiresIn: process.env.ACCESS_TOKEN_TIME,
          }),
          this.jwtService.signAsync(payload, {
            secret: process.env.REFRESH_TOKEN_KEY,
            expiresIn: process.env.REFRESH_TOKEN_TIME,
          }),
        ]);
    
        return { accessToken, refreshToken };
      }
    
      async registration(createCustomerDto: CreateCustomerDto) {
        const candidate = await this.customerService.findByEmail(createCustomerDto.email);
        if (candidate) {
          throw new ConflictException("This user email already exists");
        } 
        const admin = await this.customerService.create(createCustomerDto);
        return { adminId: admin._id };
      }
    
      async login(loginCustomerDto: LoginCustomerDto, res: Response) {
        const admin = await this.customerService.findByEmail(loginCustomerDto.email);
        if (!admin) {
          throw new UnauthorizedException("Email or password is incorrect");
        }
    
        const isMatch = await bcrypt.compare(
            loginCustomerDto.password,
          admin.password
        );
    
        if (!isMatch) {
          throw new UnauthorizedException("Email or password is incorrect");
        }
    
        const { accessToken, refreshToken } = await this.generateTokens(admin);
        admin.refresh_token = await bcrypt.hash(refreshToken, 7);
        await admin.save();
    
        res.cookie("refreshToken", refreshToken, {
          maxAge: +process.env.COOKIE_TIME!,
          httpOnly: true,
        });
    
        return { adminId: admin._id, accessToken };
      }
    
      async signOut(refreshToken: string, res: Response) {
        let userData: any;
        try {
          userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
          });
        } catch (error) {
          throw new BadRequestException(error);
        }
    
        if (!userData) {
          throw new ForbiddenException("User not found");
        }
    
        await this.customerService.uptadeRefreshToken(userData.id, "");
    
        res.clearCookie("refreshToken");
    
        return {
          message: "User logged out successfully",
        };
      }
    
      async refreshToken(
        adminId: string,
        refreshTokenFromCookie: string,
        res: Response
      ) {
    
        const decodedToken: any = this.jwtService.decode(refreshTokenFromCookie);
        if (!decodedToken || decodedToken.id !== adminId) {
          throw new ForbiddenException("Ruxsat etilmagan");
        }
    
        const user = await this.customerService.findOne(adminId);
        if (!user || !user.hashed_refresh_token) {
          throw new NotAcceptableException("Foydalanuvchi topilmadi yoki refresh token mavjud emas");
        }
      
        const tokenMatch = await bcrypt.compare(
          refreshTokenFromCookie,
          user.hashed_refresh_token
        );
        if (!tokenMatch) {
          throw new ForbiddenException("Ruxsat etilmagan: token mos emas");
        }
    
        const { accessToken, refreshToken } = await this.generateTokens(user);
      
    
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
        await this.customerService.uptadeRefreshToken(user.id || user._id, hashedRefreshToken);
      
        res.cookie("refreshToken", refreshToken, {
          maxAge: Number(process.env.COOKIE_TIME),
          httpOnly: true,
        });
     
        return {
          message: "Token successfully refreshed",
          userId: user._id,
          accessToken,
        };
      }
}
