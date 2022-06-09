import { Controller, Post, Body } from '@nestjs/common';
import { Users } from '@prisma/client';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() authDto : AuthDto): Promise<Users | object> {
        return this.authService.login(authDto)
    }
}
