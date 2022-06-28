import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Students } from '@prisma/client';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';

@Controller('student')
export class StudentController {
  constructor(private studenSevice: StudentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getStudents(): Promise<Students[] | null> {
    return this.studenSevice.getStudent();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getStudentsById(@Param('id') id: number): Promise<Students> {
    return this.studenSevice.getStudentById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createStudent(@Body() createStudenDto: StudentDto): Promise<Students> {
    return this.studenSevice.createStudent(createStudenDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updataStudent(
    @Param('id') id: number,
    @Body()
    updataStudentDto: StudentDto,
  ): Promise<Students> {
    return this.studenSevice.updateStudent({
      where: { id: +id },
      data: { ...updataStudentDto },
    });
  }

  @UseGuards(LocalStrategy)
  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studenSevice.deleteStudent({ id: +id });
  }
}
