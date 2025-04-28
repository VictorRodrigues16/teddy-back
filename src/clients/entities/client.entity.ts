import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column() 
  name: string;

  @Column() 
  salary: string;

  @Column()
  value: string;

  @Column({ default: false })
  selected: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
