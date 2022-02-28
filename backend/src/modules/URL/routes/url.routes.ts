import { Router } from 'express';
import UrlController from '../controller/UrlController';

const urlController = new UrlController();
const urlRouter = Router();

urlRouter.get('/', urlController.index);

export default urlRouter;
