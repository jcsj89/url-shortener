import { Request, Response } from 'express';

export default class UrlController {
    public async index(request: Request, response: Response) {
        return response.json({ message: 'Hello Dev' });
    }
}
