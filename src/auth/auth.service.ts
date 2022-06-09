import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Users } from '@prisma/client';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(authDto: AuthDto): Promise<Users | object> {
    const user = await this.prismaService.users.findFirst({
      where: { email: authDto.email },
    });

    if (user && user.password === authDto.password) {
      return user;
    }

    return {
      message: 'Your email or password is wrong!',
    };
  }
}
