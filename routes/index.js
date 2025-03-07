const routes = require('express').Router();
const controller = require('../controllers/index');

routes.get('/', controller.root);
routes.get('/ross', controller.ross);
routes.get('/professional', controller.professional)

module.exports = routes;