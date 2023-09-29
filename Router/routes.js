const express = require('express');
const Router = express.Router()
const controllers = require('../controller/controllers')

Router.get('/findProduto', controllers.findProduto);
Router.get('/findOne/:nome', controllers.findOne);
// Router.delete('/delete/:name', controllers.deleteUsers);
Router.post('/newProduto', controllers.createProduto)


module.exports = Router;
