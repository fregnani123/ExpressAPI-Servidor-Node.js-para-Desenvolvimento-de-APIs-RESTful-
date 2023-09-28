const express = require('express')
const routes = express.Router();
const controllers = require('../controller/controllers.js');

routes.get('/findAll', controllers.findProduto);

export default routes;
