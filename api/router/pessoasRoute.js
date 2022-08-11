const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();

route.get('/pessoas', PessoaController.pegarTodasPessoas);

module.exports = route;
