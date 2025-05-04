import { DataSource } from 'typeorm';

const isProduction = true;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'trolley.proxy.rlwy.net',
  port: 48172,
  username: 'postgres',
  password: 'PcfETFOMKYtJwOWFRcLdjzuVnyzbPAvB',
  database: 'railway',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
