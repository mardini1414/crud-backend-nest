import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [StudentModule, AuthModule, UserModule],
})
export class AppModule {}
