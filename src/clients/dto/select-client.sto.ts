import { IsArray, IsUUID } from 'class-validator';

export class SelectClientsDto {
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}
