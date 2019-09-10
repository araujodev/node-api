const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');
const UserController = require('../app/controllers/UserController');

routes.get('/', HomeController.index);

routes.get('/usuarios', UserController.index);
routes.get('/usuarios/:id', UserController.show);
routes.post('/usuarios', UserController.store);
routes.put('/usuarios/:id', UserController.update);
routes.delete('/usuarios/:id', UserController.destroy);
routes.resource

module.exports = routes;