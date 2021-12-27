import { EntityRepository, Repository } from 'typeorm';
import { CreateShortenerDto, GetByShortDto } from '../dto';
import { Shortener } from '../entities';
import { nanoid } from 'nanoid';

@EntityRepository(Shortener)
export class ShortenerRepository extends Repository<Shortener> {
  async createUrl(dto: CreateShortenerDto) {
    const exists = await this.findOne({ where: { url: dto.url } });

    if (exists) return exists;

    const data = await this.create({
      url: dto.url,
      short: nanoid(8),
    }).save();

    return data;
  }

  async findByShort(dto: GetByShortDto) {
    const data = await this.findOne({ where: { short: dto.short } });

    if (!data) return false;

    return data.url;
  }
}
