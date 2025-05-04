import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { In, Repository } from 'typeorm';
import { ClientEntity } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientEntity: Repository<ClientEntity>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    createClientDto.id = uuidv4();
    createClientDto.createdAt = new Date();
    return await this.clientEntity.save(createClientDto);
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<ClientEntity | null> {
    const client = await this.clientEntity.findOne({ where: { id } });
    if (!client) {
      return null;
    }
    client.name = updateClientDto.name;
    client.salary = updateClientDto.salary;
    client.value = updateClientDto.value;
    client.selected = updateClientDto.selected;
    client.updatedAt = new Date();
    return await this.clientEntity.save(client);
  }

  async findAll(page: number = 1, limit: number = 10, selected?: boolean): Promise<object> {
    const filter =
      selected !== undefined
        ? { isActive: true, selected }
        : { isActive: true };

    const [result, total] = await this.clientEntity.findAndCount({
      where: filter,
      select: ['id', 'name', 'salary', 'value', 'selected'],
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });

    if (result.length > 0) {
      const totalPages = Math.ceil(total / limit);
      return {
        data: result,
        totalItems: total,
        totalPages: totalPages,
        currentPage: page,
        itemsPerPage: limit,
      };
    }

    return {
      data: [],
      message: 'No clients found',
    };
  }

  async disable(id: string): Promise<ClientEntity | null> {
    const client = await this.clientEntity.findOne({ where: { id } });

    if (!client) {
      return null;
    }

    client.isActive = false;
    client.deletedAt = new Date();
    return await this.clientEntity.save(client);
  }

  async selectClients(ids: string[]): Promise<ClientEntity[]> {
    const clients = await this.clientEntity.find({
      where: {
        id: In(ids),
      },
    });

    for (const client of clients) {
      client.selected = false;
    }

    await this.clientEntity.save(clients);

    return clients;
  }
}
