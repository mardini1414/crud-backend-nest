import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<object> {
    const user = await this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      const jwt = await this.jwtService.signAsync({ ...result });
      return {
        access_token: jwt,
      };
    }
    return new UnauthorizedException('email or password is wrong!');
  }
}
