import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateClientDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Salary is required' })
  @IsString()
  salary: string;

  @IsNotEmpty({ message: 'Value is required' })
  @IsString()
  value: string;

  @IsOptional()
  @IsBoolean()
  selected?: boolean;

  @IsOptional()
  createdAt?: Date;
}
