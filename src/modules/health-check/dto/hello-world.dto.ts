import { ApiProperty } from '@nestjs/swagger';

export class HelloWorldResponseDto {
  @ApiProperty()
  status: 200;
}
