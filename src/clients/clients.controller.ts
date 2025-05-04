import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';
import { SelectClientsDto } from './dto/select-client.sto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('select')
  async selectClients(@Body() body: SelectClientsDto): Promise<ClientEntity[]> {
  return await this.clientsService.selectClients(body.ids);
}


  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<ClientEntity> {
    return await this.clientsService.create(createClientDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<UpdateClientDto> {
    return await this.clientsService.update(id, updateClientDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,  
    @Query('selected') selected?: boolean, 
  ) {
    return this.clientsService.findAll(page, limit, selected);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CreateClientDto | null> {
    return await this.clientsService.disable(id);
  }

 

}
