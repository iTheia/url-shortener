import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { ShortenerModule } from './modules/shortener/shortener.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: config, cache: false, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database-main'),
      inject: [ConfigService],
    }),
    HealthCheckModule,
    ShortenerModule,
  ],
})
export class AppModule {}
