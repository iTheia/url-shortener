import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: config }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database-main'),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
