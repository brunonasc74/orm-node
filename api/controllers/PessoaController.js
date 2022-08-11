const database = require('../models');

class PessoaController {
	static async pegarTodasPessoas(_, res) {
		try {
			const todasPessoas = await database.Pessoas.findAll();
			return res.status(200).send(todasPessoas);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params;
		try {
			const umaPessoa = await database.Pessoas.findOne({ where: { id: +id } });
			return res.status(200).send(umaPessoa);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async criarPessoa(req, res) {
		try {
			const umaPessoa = req.body;
			await database.Pessoas.create(umaPessoa);
			return res.status(201).send('Pessoa adicionada com sucesso');
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
}

module.exports = PessoaController;
