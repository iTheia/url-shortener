import { IsString, Length } from 'class-validator';

export class GetByShortDto {
  @IsString()
  @Length(8)
  short: string;
}
