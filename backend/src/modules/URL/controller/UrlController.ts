import { Request, Response } from 'express';
import CreateUrlService from '../services/CreateUrlService';
import FindUrlService from '../services/FindUrlService';
import ListUrlService from '../services/ListUrlService';

export default class UrlController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        return response.json({ message: 'Hello Dev' });
    }

    /**
        28.02.22 - Controller
        Metodo responsavel por chamar o serviço que cria
        e salva as urls no banco de dados.

     */
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { long } = request.body;
        const createUrlService = new CreateUrlService();

        const url = await createUrlService.execute({ long });

        if (url) {
            return response.json(url);
        }

        return response.json({ message: 'Url invalida para cadastro.' });
    }

    /**
        28.02.22 - Controller
        Metodo responsavel por chamar o serviço que lista
        todas as urls do banco de dados.

     */
    public async list(request: Request, response: Response) {
        const listUrlService = new ListUrlService();

        const urls = await listUrlService.execute();

        return response.json(urls);
    }

    /**
        28.02.22 - Controller
        Metodo responsavel por chamar o serviço que busca no banco
        a url original passando por parametro a url encurtada, e
        caso obter sucesso é feito o redirecionamento.

     */
    public async redirect(request: Request, response: Response) {
        const findUrlService = new FindUrlService();
        const short = request.params.url;

        const url = await findUrlService.execute({ short });

        if (url) {
            const long = url.long;
            return response.redirect(301, long);
        }

        return response.json({ message: 'Url não encontrada.' });
    }
}
