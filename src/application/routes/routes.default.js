const express = require('express');
const routes = express.Router();
const controllerDefault = require('../controller/controller.default.js');


routes.get('/', controllerDefault.getRootPath);
routes.get('*', controllerDefault.getRootDefault);

module.exports = routes;