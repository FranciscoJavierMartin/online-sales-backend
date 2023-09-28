import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ name: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ name: 'email' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ name: 'phone' })
  @IsString()
  phone: string;

  @ApiProperty({ name: 'cpf' })
  @IsString()
  cpf: string;

  @ApiProperty({ name: 'password' })
  @IsString()
  password: string;
}
