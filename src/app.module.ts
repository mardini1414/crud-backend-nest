import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StudentModule, AuthModule],
  providers: [],
})
export class AppModule {}
