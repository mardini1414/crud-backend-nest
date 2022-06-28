import { IsEmail, Length, Validate } from 'class-validator';

export class StudentDto {
  @Length(10, 10)
  readonly nik: string;

  @Length(3, 20)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Length(25)
  readonly address: string;
}
