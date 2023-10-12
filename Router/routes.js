const express = require('express');
const Router = express.Router()
const controllers = require('../controller/controllers')

Router.get('/findProduto', controllers.findProduto);

Router.get('/findone/:nome', controllers.findOne);

Router.delete('/deleteproduto/:id', controllers.deleteProduto);

Router.post('/newProduto', controllers.createProduto);

Router.patch('/updateProduto/:id', controllers.updateProduto)

module.exports = Router;
