const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();

route.get('/pessoas', PessoaController.pegarTodasPessoas);
route.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
route.post('/pessoas', PessoaController.criarPessoa);

module.exports = route;
