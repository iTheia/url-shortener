import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default registerAs(
  'database-main',
  (): TypeOrmModuleOptions => ({
    port: parseInt(env.DB_PORT) || 5432,
    host: env.DB_HOST || 'localhost',
    username: env.DB_USER || 'postgres',
    password: env.DB_PASS || 'postgres',
    database: env.DB_DATABASE || 'url-shortener',
    synchronize: env.NODE_ENV === 'dev',
    type: 'postgres',
    ssl: false,
    autoLoadEntities: true,
  }),
);
