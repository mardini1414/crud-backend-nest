import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [AuthModule],
  controllers: [StudentController],
  providers: [StudentService, PrismaService],
  exports: [StudentModule],
})
export class StudentModule {}
