const express = require('express');
const routes = express.Router();
const controllerUser = require('../controller/controller.user.js');
routes.use(express.json());


routes.get('/', controllerUser.getUser);
routes.get('/:id', controllerUser.getUserId);
routes.post('/', controllerUser.postUser);
routes.put('/:id', controllerUser.putUser);
routes.delete('/:id', controllerUser.deleteUser)


module.exports = routes;