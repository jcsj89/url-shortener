import { getCustomRepository } from 'typeorm';
import Url from '../typeorm/entities/Url';
import { UrlRepository } from '../typeorm/repositories/UrlRepository';

interface IRequest {
    short: string;
}

export default class FindUrlService {
    /**
        28.02.22
        Metodo responsavel por buscar uma url especifica
        no banco de dados usando a url encurtada como parametro.

     */
    public async execute({ short }: IRequest): Promise<Url | undefined> {
        const urlsRepository = getCustomRepository(UrlRepository);

        const url = await urlsRepository.findByShort(short);

        return url;
    }
}
