const express = require('express');
const Router = express.Router()
const controllers = require('../controller/controllers')

Router.get('/findProduto', controllers.findProduto);
Router.get('/findOne/:id', controllers.findOne);
Router.delete('/deleteProduto/:nome', controllers.deleteProduto);
Router.post('/newProduto', controllers.createProduto)

module.exports = Router;
