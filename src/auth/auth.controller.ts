import { BadRequestException, Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LoginAdminDto } from "../admin/dto/login-admin.dto";
import { Request, Response } from "express";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registration")
  async registration(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.registration(createAdminDto);
  }

  @Post("login")
  async login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(loginAdminDto, res);
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
    return this.authService.signOut(refreshToken, res);
  }
  

  @Post("refresh")
async refresh(
  @Body("adminId") adminId: string,
  @Req() req: Request,
  @Res({ passthrough: true }) res: Response
) {
  const refreshToken = req.cookies?.refreshToken;
  return this.authService.refreshToken(adminId, refreshToken, res);
}
}
