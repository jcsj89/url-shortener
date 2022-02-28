import { getCustomRepository } from 'typeorm';
import Url from '../typeorm/entities/Url';
import { UrlRepository } from '../typeorm/repositories/UrlRepository';

interface IRequest {
    long: string;
}

export default class CreateUrlService {
    /**
        28.02.22
        Metodo responsavel por salvar no banco de dados na 
        tabela url, a url do usuario e a url encurtada

     */
    public async execute({ long }: IRequest): Promise<Url | boolean> {
        const urlsRepository = getCustomRepository(UrlRepository);

        const short = this.geradorStringAleatorio(5);

        /*
            Caso a url for valida, salva no banco e retorna
            o objeto salvo, senão retorna falso.
        */
        if (this.isValidHttpUrl(long)) {
            const url = urlsRepository.create({
                long,
                short,
            });

            await urlsRepository.save(url);
            return url;
        }

        return false;
    }

    /**
        28.02.22
        Metodo que retorna uma string aleatoria com os caracteres do alfabeto,
        o tamanho da string é passado por parametro na funcao, tendo tamanho 5
        como padrao.

     */
    private geradorStringAleatorio(tamanho = 5) {
        const caracteres =
            'ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz';
        let shortUrl: string | undefined = '';

        for (let i = 0; i < tamanho; i++) {
            const ramdomNumber = Math.floor(Math.random() * caracteres.length);
            // shortUrl.concat(caracteres[ramdomNumber]);
            shortUrl += caracteres[ramdomNumber];
        }
        return shortUrl;
    }

    private isValidHttpUrl(uri: string) {
        let url;

        try {
            url = new URL(uri);
        } catch (_) {
            return false;
        }

        return url.protocol === 'http:' || url.protocol === 'https:';
    }
}
