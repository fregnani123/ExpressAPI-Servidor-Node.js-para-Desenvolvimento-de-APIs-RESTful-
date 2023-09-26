import express from 'express';
const apiRouter = express.Router();
import controllers from '../controller/controllers';

apiRouter.get('/findAll', controllers.findProduto);

export { apiRouter }
