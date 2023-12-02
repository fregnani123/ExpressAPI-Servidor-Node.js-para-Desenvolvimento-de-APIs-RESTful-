const express = require('express');
const Router = express.Router()
const controllers = require('../controller/controllers')

Router.get('/findProduto', controllers.findProduto);

Router.get('/findone/:nome', controllers.findOne);

Router.delete('/deleteproduto/:id', controllers.deleteProduto);

Router.post('/newProduto', controllers.createProduto);

Router.patch('/updateProduto/:codigoDeBarras', controllers.updateProduto);

Router.post('/detalhesdevendaPost', controllers.createDetalheVenda);

Router.get('/detalhes', controllers.detalhes)

module.exports = Router;
