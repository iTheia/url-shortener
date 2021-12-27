import { IsString, IsUrl } from 'class-validator';

export class CreateShortenerDto {
  @IsString()
  @IsUrl()
  url: string;
}
