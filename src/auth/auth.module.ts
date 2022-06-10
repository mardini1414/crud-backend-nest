import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    AuthModule,
    PassportModule,
    UserModule,
    JwtModule.register({ secret: 'secret' }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtService,
    AuthService,
    UserService,
    PrismaService,
  ],
  exports: [],
})
export class AuthModule {}
