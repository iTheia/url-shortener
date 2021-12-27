import { NoProd } from '@middlewares/decorators';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import * as fs from 'fs';
import { HelloWorldResponseDto, VersionResponseDto } from './dto';

@ApiTags('Additional Endpoints')
@NoProd()
@Controller('')
export class HealthCheckController {
  @ApiOperation({ summary: 'Endpoint que dice la version de la api' })
  @ApiResponse({ status: 200, type: VersionResponseDto })
  @Get('/version')
  deployVersion() {
    const response = { version: '' };
    const commit_file = fs.readFileSync('commit-log.txt', 'utf8');
    const splitted_file = commit_file.split('\n');
    if (splitted_file.length > 0) {
      response.version = splitted_file[0];
    }
    return response;
  }

  @ApiOperation({
    summary: 'Endpoint el cual muestra si el servicio esta disponible',
  })
  @ApiResponse({ status: 200, type: HelloWorldResponseDto })
  @Get('health-check')
  helloWorld() {
    return {
      status: 200,
    };
  }
}
