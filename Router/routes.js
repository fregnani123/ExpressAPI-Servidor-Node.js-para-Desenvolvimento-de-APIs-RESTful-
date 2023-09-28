const express = require('express');
const Router = express.Router()
const controllers = require('../controller/controllers')

Router.get('/findProduto', controllers.findProduto);
// Router.get('/find/:id', controllers.findOne);
// Router.delete('/delete/:name', controllers.deleteUsers);
// Router.post('/newuser', controllers.createUsers)


module.exports = Router;
