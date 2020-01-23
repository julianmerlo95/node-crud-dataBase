const express = require('express');
const routes = express.Router();

routes.use('/user', require('./routes.user.js'));
routes.use('/', require('./routes.default.js'));

module.exports = routes;