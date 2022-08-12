const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const route = Router();

route.get('/niveis', NivelController.pegaTodosOsNiveis);
route.get('/niveis/:id', NivelController.pegaUmNivel);

module.exports = route;
