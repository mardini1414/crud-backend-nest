import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Students } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  getStudent(): Promise<Students[] | null> {
    return this.prismaService.students.findMany();
  }

  getStudentById(id: number): Promise<Students> {
    return this.prismaService.students.findFirst({ where: { id: id } });
  }

  createStudent(data: Prisma.StudentsCreateInput): Promise<Students> {
    return this.prismaService.students.create({ data });
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
