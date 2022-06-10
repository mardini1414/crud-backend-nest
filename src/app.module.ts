import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [StudentModule, AuthModule],
})
export class AppModule {}
