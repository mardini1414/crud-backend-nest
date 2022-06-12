import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt_auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(
    @Body() authDto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<string | object> {
    try {
      const jwt = await this.authService.validateUser(authDto);
      const token = {
        jwt,
        refreshToken: '',
      };
      res.cookie('user_token', token, { httpOnly: true });
      return {
        message: { message: 'success login!' },
      };
    } catch (error) {
      throw new BadRequestException('email or password is wrong!');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  logout(@Res({ passthrough: true }) res: Response): object {
    res.clearCookie('user_token');
    return {
      message: 'success logout',
    };
  }
}
