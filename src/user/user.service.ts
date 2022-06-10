import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findUserByEmail(email: string) {
    return await this.prismaService.users.findFirst({ where: { email } });
  }
}
