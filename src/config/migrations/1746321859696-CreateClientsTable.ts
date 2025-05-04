import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientsTable1746321859696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'salary',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'value',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'selected',
            type: 'boolean',
            isNullable: false,
            default: false
          },
          {
            name: 'isActive',
            type: 'boolean',
            isNullable: false,
            default: true
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
