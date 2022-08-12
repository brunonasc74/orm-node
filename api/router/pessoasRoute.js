const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();

route.get('/pessoas', PessoaController.pegaTodasPessoas);
route.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
route.post('/pessoas', PessoaController.criaPessoa);
route.put('/pessoas/:id', PessoaController.editaPessoa);
route.delete('/pessoas/:id', PessoaController.apagaPessoa);
// Matriculas
route.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
route.post('/pessoas/:id/matricula', PessoaController.criaMatricula);
route.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.editaMatricula);
route.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = route;
