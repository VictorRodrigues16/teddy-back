import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiQuery,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';
import { SelectClientsDto } from './dto/select-client.sto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('select')
  @ApiOperation({ summary: 'Remove clients by IDs' })
  @ApiBody({ type: SelectClientsDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Clients selected successfully.',
    type: [ClientEntity] 
  })
  async selectClients(@Body() body: SelectClientsDto): Promise<ClientEntity[]> {
    return await this.clientsService.selectClients(body.ids);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new client' })
  @ApiBody({ type: CreateClientDto  })
  @ApiResponse({ 
    status: 201, 
    description: 'Client created successfully.',
    type: ClientEntity 
  })
  async create(@Body() createClientDto: CreateClientDto): Promise<ClientEntity> {
    return await this.clientsService.create(createClientDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update client by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateClientDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Client updated successfully.',
    type: ClientEntity 
  })
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<ClientEntity> {
    return await this.clientsService.update(id, updateClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all clients with pagination and filter' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'selected', required: false, type: Boolean })
  @ApiResponse({ 
    status: 200, 
    description: 'List of clients returned successfully.',
    type: [ClientEntity] 
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('selected') selected?: boolean,
  ) {
    return this.clientsService.findAll(page, limit, selected);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Disable (remove) client by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ 
    status: 200, 
    description: 'Client disabled successfully.',
    type: CreateClientDto 
  })
  async remove(@Param('id') id: string): Promise<CreateClientDto | null> {
    return await this.clientsService.disable(id);
  }
}
