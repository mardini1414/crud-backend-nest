import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Students } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  getStudent(): Promise<Students[] | null> {
    return this.prismaService.students.findMany();
  }

  getStudentById(id: number): Promise<Students> {
    return this.prismaService.students.findFirst({ where: { id } });
  }

  createStudent(data: Prisma.StudentsCreateInput): Promise<Students> {
    return this.prismaService.students.create({ data }).catch((e) => {
      if (e.meta.target.match(/nik/gm)) {
        throw new BadRequestException('Nik already exist');
      } else if (e.meta.target.match(/email/gm)) {
        throw new BadRequestException('Email already exist');
      } else {
        return e;
      }
    });
  }

  updateStudent(params: {
    where: Prisma.StudentsWhereUniqueInput;
    data: Prisma.StudentsUpdateInput;
  }): Promise<Students> {
    const { where, data } = params;
    return this.prismaService.students.update({
      where,
      data,
    });
  }

  deleteStudent(where: Prisma.StudentsWhereUniqueInput): Promise<Students> {
    return this.prismaService.students.delete({ where });
  }
}
