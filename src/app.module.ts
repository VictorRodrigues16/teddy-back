import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './clients/entities/client.entity';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,         
      username: 'postgres', 
      password: '123', 
      database: 'teddy', 
      entities: [ClientEntity], 
      synchronize: true, 
    }),
    ClientsModule,
  ],
})
export class AppModule {}
