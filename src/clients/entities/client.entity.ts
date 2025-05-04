import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('clients')
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    description: 'Unique identifier of the client.',
    example: '1a2b3c4d-1234-5678-9101-112131415161',
  })
  id: string;

  @Column()
  @ApiProperty({
    description: 'Name of the client.',
    example: 'John Doe',
  })
  name: string;

  @Column('decimal')
  @ApiProperty({
    description: 'Salary of the client.',
    example: '3000.00',
  })
  salary: string;

  @Column('decimal')
  @ApiProperty({
    description: 'Value associated with the client.',
    example: '1000.00',
  })
  value: string;

  @Column({ default: false })
  @ApiProperty({
    description: 'Indicates if the client is selected.',
    example: true,
  })
  selected: boolean;

  @Column({ default: true })
  @ApiProperty({
    description: 'Indicates if the client is active.',
    example: true,
  })
  isActive: boolean;

  @CreateDateColumn()
  @ApiProperty({
    description: 'Date when the client was created.',
    type: String,
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  @ApiProperty({
    description: 'Date when the client was last updated.',
    type: String,
    example: '2023-02-01T00:00:00.000Z',
    nullable: true,
  })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @ApiProperty({
    description: 'Date when the client was deleted.',
    type: String,
    example: '2023-03-01T00:00:00.000Z',
    nullable: true,
  })
  deletedAt: Date;
}
