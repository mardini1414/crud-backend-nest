import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Students } from '@prisma/client';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {
  constructor(private studenSevice: StudentService) {}

  @Get()
  getStudents(): Promise<Students[] | null> {
    return this.studenSevice.getStudent();
  }

  @Get(':id')
  getStudentsById(@Param('id') id: number): Promise<Students> {
    return this.studenSevice.getStudentById(+id);
  }

  @Post()
  createStudent(@Body() createStudenDto: StudentDto): Promise<Students> {
    return this.studenSevice.createStudent(createStudenDto);
  }

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

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studenSevice.deleteStudent({ id: +id });
  }
}
