import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @ApiProperty({ required: false, description: 'Client ID to be updated', example: '1a2b3c4d' })
  id?: string;
}
