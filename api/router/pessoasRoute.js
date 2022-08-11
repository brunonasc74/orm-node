const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();

route.get('/pessoas', PessoaController.pegaTodasPessoas);
route.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
route.post('/pessoas', PessoaController.criaPessoa);
route.put('/pessoas/:id', PessoaController.editaPessoa);
route.delete('/pessoas/:id', PessoaController.apagaPessoa);

module.exports = route;
