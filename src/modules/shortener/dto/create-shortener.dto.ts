import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateShortenerDto {
  @ApiProperty({
    example: 'https://www.google.com.mx',
  })
  @IsString()
  @IsUrl()
  url: string;
}
