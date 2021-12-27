import { NotFoundException } from '@const/exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShortenerDto } from './dto/create-shortener.dto';
import { ShortenerRepository } from './repositories';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(ShortenerRepository)
    private shortenerRepository: ShortenerRepository,
  ) {}

  async create(dto: CreateShortenerDto) {
    const data = await this.shortenerRepository.createUrl(dto);
    return {
      shortUrl: data.short,
    };
  }

  async findOne(short: string) {
    const url = await this.shortenerRepository.findByShort({ short });

    if (!url)
      throw new NotFoundException(
        'sorry but the url you are looking for does not exist',
      );

    return url;
  }
}
