import { EntityRepository, Repository } from 'typeorm';
import Url from '../entities/Url';

@EntityRepository(Url)
export class UrlRepository extends Repository<Url> {
    async findByLong(long: string): Promise<Url[] | undefined> {
        return this.find({ where: { long } });
    }

    async findByShort(short: string): Promise<Url | undefined> {
        return this.findOne({ short });
    }
}
