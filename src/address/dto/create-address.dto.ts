import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ name: 'complement' })
  @IsString()
  @IsOptional()
  complement: string;

  @ApiProperty({ name: 'numberAddress' })
  @IsInt()
  numberAddress: number;

  @ApiProperty({ name: 'cep' })
  @IsString()
  cep: string;

  @ApiProperty({ name: 'cityId' })
  @IsInt()
  cityId: number;
}
