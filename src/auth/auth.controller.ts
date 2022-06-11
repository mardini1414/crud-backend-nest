import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Users } from '@prisma/client';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() authDto: AuthDto): Promise<Users | object> {
    return await this.authService.validateUser(authDto);
  }
}
