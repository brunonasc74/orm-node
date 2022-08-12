const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const route = Router();

route.get('/turmas', TurmaController.pegaTodasAsTurmas);
route.get('/turmas/:id', TurmaController.pegaUmaTurma);

module.exports = route;
