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
}

module.exports = PessoaController;
