import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class GetByShortDto {
  @ApiProperty({ example: '3wApNqA_' })
  @IsString()
  @Length(8)
  short: string;
}
