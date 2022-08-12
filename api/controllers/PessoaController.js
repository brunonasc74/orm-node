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

	// Matrícula
	static async pegaUmaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			const umaMatricula = await database.Matriculas.findOne({
				where: {
					id: +matriculaId,
					estudante_id: +estudanteId,
				},
			});
			return res.status(200).send(umaMatricula);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async criaMatricula(req, res) {
		const { id } = req.params;
		try {
			const novaMatricula = { ...req.body, estudante_id: +id };
			await database.Matriculas.create(novaMatricula);
			return res.status(201).send('Pessoa matriculada com sucesso');
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async editaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		const novasInfos = req.body;
		try {
			await database.Matriculas.update(novasInfos, {
				where: {
					id: +matriculaId,
					estudante_id: estudanteId,
				},
			});
			const matriculaAtualizada = await database.Matriculas.findOne({
				where: { id: +matriculaId },
			});
			return res.status(200).send(matriculaAtualizada);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async apagaMatricula(req, res) {
		try {
			const { estudanteId, matriculaId } = req.params;
			await database.Matriculas.destroy({ where: { id: +matriculaId } });
			res.status(200).send(`id ${matriculaId} apagado com sucesso`);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
}

module.exports = PessoaController;
