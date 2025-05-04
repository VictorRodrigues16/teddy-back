import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {

  @ApiProperty({ description: 'Client name', example: 'John Doe' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Client salary', example: '3000' })
  @IsNotEmpty({ message: 'Salary is required' })
  @IsString()
  salary: string;

  @ApiProperty({ description: 'Value associated with the client', example: '1000' })
  @IsNotEmpty({ message: 'Value is required' })
  @IsString()
  value: string;

  @ApiProperty({ required: false, description: 'Indicates if the client is selected', example: true })
  @IsOptional()
  @IsBoolean()
  selected?: boolean;

  @ApiProperty({ required: false, description: 'Client creation date', example: '2023-01-01T00:00:00.000Z' })
  @IsOptional()
  createdAt?: Date;
}
