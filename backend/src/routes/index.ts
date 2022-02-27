import { Router } from 'express';
import urlRouters from '../modules/URL/routes/url.routes';

const routes = Router();

routes.use('/', urlRouters);

// routes.get('/', (request, response) => {
//     return response.json({ message: 'Hello Dev.' });
// });

export default routes;
