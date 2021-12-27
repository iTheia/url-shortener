import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { CreateShortenerDto } from './dto/create-shortener.dto';
import { ShortValidationPipe } from '@middlewares/pipes/short-validation.pipe';
import { Response } from 'express';

@Controller('')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post('short-url')
  async create(@Body() dto: CreateShortenerDto) {
    return await this.shortenerService.create(dto);
  }

  @Get(':short')
  async findOne(
    @Param('short', ShortValidationPipe) short: string,
    @Res() res: Response,
  ) {
    res.redirect(await this.shortenerService.findOne(short));
  }
}
