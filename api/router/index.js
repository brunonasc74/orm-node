const express = require('express');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmaRoute');

module.exports = (app) => {
	app.use(pessoas);
	app.use(niveis);
	app.use(turmas);
};
