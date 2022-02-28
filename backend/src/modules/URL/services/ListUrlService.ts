import { getCustomRepository } from 'typeorm';
import Url from '../typeorm/entities/Url';
import { UrlRepository } from '../typeorm/repositories/UrlRepository';

class ListUrlService {
    /**
        28.02.22
        Metodo responsavel por retornar todas as urls
        cadastradas no banco de dados.

     */
    public async execute(): Promise<Url[] | undefined> {
        const urlsRepository = getCustomRepository(UrlRepository);

        const urls = await urlsRepository.find();

        return urls;
    }
}

export default ListUrlService;
