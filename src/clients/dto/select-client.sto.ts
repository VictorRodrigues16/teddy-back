import { IsArray, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SelectClientsDto {
  @ApiProperty({ description: 'List of client IDs', example: ['1a2b3c4d', '5e6f7g8h'], type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}
