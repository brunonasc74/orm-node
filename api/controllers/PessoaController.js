const database = require('../models');

class PessoaController {
	static async pegaTodasPessoas(_, res) {
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

	static async criaPessoa(req, res) {
		try {
			const umaPessoa = req.body;
			await database.Pessoas.create(umaPessoa);
			return res.status(201).send('Pessoa adicionada com sucesso');
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async editaPessoa(req, res) {
		try {
			const { id } = req.params;
			const novasInfos = req.body;
			await database.Pessoas.update(novasInfos, { where: { id: +id } });
			return res.status(200).send('Pessoa atualizada com sucesso');
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async apagaPessoa(req, res) {
		try {
			const { id } = req.params;
			await database.Pessoas.destroy({ where: { id: +id } });
			res.status(200).send(`id ${id} apagado com sucesso`);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
}

module.exports = PessoaController;
