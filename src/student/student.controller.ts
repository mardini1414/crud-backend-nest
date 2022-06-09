import { Controller, Get } from '@nestjs/common';
import { Students } from '@prisma/client';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studenSevice : StudentService){}

    @Get()
    getStudents(): Promise<Students[] | null> {
        return this.studenSevice.getStudent()
    }
}
