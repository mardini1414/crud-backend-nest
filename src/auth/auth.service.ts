import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(authDto: AuthDto): Promise<string | Object> {
    const user = await this.userService.findUserByEmail(authDto.email);
    if (user && user.password === authDto.password) {
      const { password, ...result } = user;
      const jwt = this.jwtService.sign(result);
      return jwt;
    }
    throw new BadRequestException('email or password is wrong!');
  }
}
