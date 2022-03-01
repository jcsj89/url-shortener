import { Router } from 'express';
import UrlController from '../controller/UrlController';

const urlController = new UrlController();
const urlRouter = Router();

urlRouter.get('/', urlController.index);
urlRouter.get('/list', urlController.list);
urlRouter.get('/:url', urlController.redirect);
urlRouter.post('/', urlController.create);

export default urlRouter;
