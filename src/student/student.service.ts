import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service'
import {Prisma,  Students } from "@prisma/client";

@Injectable()
export class StudentService{
    constructor(private prismaService: PrismaService){

    }

    getStudent(): Promise<Students[]|null>{
        return this.prismaService.students.findMany()
    }

    createStudent(data : Prisma.StudentsCreateInput ): Promise<Students> {
        return this.prismaService.students.create({data})
    }
}