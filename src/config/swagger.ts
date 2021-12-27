import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Url shortener')
  .setDescription('')
  .setVersion('1.0')
  .build();
